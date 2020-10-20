import { ChatMessage, ChatMessageContext } from './chat-message';
import { SyncObject, SyncVar } from './core/synchronize-object/decorator';
import { ObjectNode } from './core/synchronize-object/object-node';
import { InnerXml, ObjectSerializer } from './core/synchronize-object/object-serializer';
import { EventSystem } from './core/system';

//entyu
import { ImageFile } from './core/file-storage/image-file';
import { ImageStorage } from './core/file-storage/image-storage';
//

@SyncObject('chat-tab')
export class ChatTab extends ObjectNode implements InnerXml {
  @SyncVar() name: string = 'タブ';
//entyu
  @SyncVar() pos_num: number = -1;
  @SyncVar() imageIdentifier: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l'];
  @SyncVar() imageIdentifierZpos: number[] = [0,1,2,3,4,5,6,7,8,9,10,11];

  @SyncVar() count:number = 0;
  @SyncVar() imageIdentifierDummy: string = 'test';//通信のどうきのために使わなくても書かなきゃだめっぽい？;
  
  get chatMessages(): ChatMessage[] { return <ChatMessage[]>this.children; }

  get imageZposList( ): number[] {
    let ret:number[] = this.imageIdentifierZpos.slice();
    return ret;
  }

//entyu_21
  tachieZindex( toppos : number ):number {
    let index = this.imageIdentifierZpos.indexOf( Number(toppos) );
    return index;
  }

//  public tachieDispFlag : boolean = true;
  public tachieDispFlag = 1;

  replaceTachieZindex( toppos : number ){
//  console.log( 'imageIdentifierZpos before ' + this.imageIdentifierZpos ); 
    let index = this.imageIdentifierZpos.indexOf( Number(toppos) );
//  console.log( 'index = ' + index ); 
    if( index >= 0 ){
      this.imageIdentifierZpos.splice(index,1);
      this.imageIdentifierZpos.push( Number(toppos) );
      console.log( 'imageIdentifierZpos = ' + this.imageIdentifierZpos ); 
    }
  }

//entyu_21
  private _dispCharctorIcon: boolean = true;
  get dispCharctorIcon(): boolean { return this._dispCharctorIcon; }
  set dispCharctorIcon( flag : boolean) { this._dispCharctorIcon = flag; }

 
//
  private _unreadLength: number = 0;
  get unreadLength(): number { return this._unreadLength; }
  get hasUnread(): boolean { return 0 < this.unreadLength; }

  get latestTimeStamp(): number {
    let lastIndex = this.chatMessages.length - 1;
    return lastIndex < 0 ? 0 : this.chatMessages[lastIndex].timestamp;
  }
  
  // ObjectNode Lifecycle
  onChildAdded(child: ObjectNode) {
    super.onChildAdded(child);
    if (child.parent === this && child instanceof ChatMessage && child.isDisplayable) {
      this._unreadLength++;
      EventSystem.trigger('MESSAGE_ADDED', { tabIdentifier: this.identifier, messageIdentifier: child.identifier });
    }
  }

  addMessage(message: ChatMessageContext): ChatMessage {
    message.tabIdentifier = this.identifier;

    let chat = new ChatMessage();
    for (let key in message) {
      if (key === 'identifier') continue;
      if (key === 'tabIdentifier') continue;
      if (key === 'text') {
        chat.value = message[key];
        continue;
      }
      if (message[key] == null || message[key] === '') continue;
//entyu
      if (key === 'imagePos') {
        this.pos_num = message[key];
        if( 0 <= this.pos_num && this.pos_num < this.imageIdentifier.length ){
           this.imageIdentifier[this.pos_num] = message['imageIdentifier'];
           this.replaceTachieZindex(this.pos_num);
           this.imageIdentifierDummy = message['imageIdentifier'];//同期方法がすこぶる怪しい後で確認
        }
      }
//
      chat.setAttribute(key, message[key]);
    }
    chat.initialize();
    EventSystem.trigger('SEND_MESSAGE', { tabIdentifier: this.identifier, messageIdentifier: chat.identifier });
    this.appendChild(chat);
    return chat;
  }

  markForRead() {
    this._unreadLength = 0;
  }

  innerXml(): string {
    let xml = '';
    for (let child of this.children) {
      if (child instanceof ChatMessage && !child.isDisplayable) continue;
      xml += ObjectSerializer.instance.toXml(child);
    }
    return xml;
  };

  parseInnerXml(element: Element) {
    return super.parseInnerXml(element);
  };
}
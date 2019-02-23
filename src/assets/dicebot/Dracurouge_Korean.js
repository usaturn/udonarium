/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $gvars = Opal.gvars, $hash2 = Opal.hash2;

  Opal.add_stubs(['$debug', '$getConductResult', '$nil?', '$getResistResult', '$getReactionResult', '$getCorruptionResult', '$getTableResult', '$===', '$to_i', '$==', '$rollDiceList', '$getGloryDiceCount', '$times', '$<<', '$getThirstyAddedResult', '$empty?', '$+', '$join', '$roll', '$sort', '$collect', '$split', '$countTargetDice', '$floor', '$/', '$count', '$select', '$rindex', '$<=', '$each_with_index', '$to_s', '$[]=', '$[]', '$upcase', '$getReactionTable', '$get_table_by_d66', '$<', '$getReactionTextFull', '$index', '$getReactionTex', '$-', '$get_table_by_number', '$get_table_by_2d6', '$get_table_by_1d6', '$setPrefixes', '$keys']);
  return (function($base, $super) {
    function $Dracurouge_Korean(){};
    var self = $Dracurouge_Korean = $klass($base, $super, 'Dracurouge_Korean', $Dracurouge_Korean);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_7, TMP_9, TMP_10, TMP_12, TMP_15, TMP_16, TMP_17, TMP_19, TMP_20, TMP_21, TMP_22, TMP_23, TMP_24, $a;

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
      return self.d66Type = 1;
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "드라크루주";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "Dracurouge:Korean";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "・행동판정（DRx+y）\n　x：굴리는 주사위의 수（생략시４）, y：갈증수정（생략시０）\n　예） DR　DR6　DR+1　DR5+2\n・저항판정（DRRx）\n　x：굴리는 주사위의\n　예） DRR3\n・타락표（CTx） x：갈증（예） CT3\n・타락의 전조표（CS）\n・인연 내용 결정표（BT）\n・반응표（RTxy）x：혈통, y：길　xy생략으로 일괄표시\n　　혈통　D：드라크, R：로젠부르크, H：헬스가르드, M：더스트하임,\n　　　　　A：아발롬　N：노스페라스\n　　길　　F：영주, G：근위, R：방랑, W：현자, J：사냥꾼, N：야수\n　예）RT（일괄표시）, RTDF（드라크 영주）, RTAN（아발롬 야수）\n・D66 다이스 있음\n";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$rollDiceCommand', TMP_5 = function $$rollDiceCommand(command) {
      var $a, self = this, result = nil;

      self.$debug("rollDiceCommand");
      result = self.$getConductResult(command);
      if ((($a = result['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return result
      };
      result = self.$getResistResult(command);
      if ((($a = result['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return result
      };
      result = self.$getReactionResult(command);
      if ((($a = result['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return result
      };
      result = self.$getCorruptionResult(command);
      if ((($a = result['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return result
      };
      result = self.$getTableResult(command);
      if ((($a = result['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return result
      };
      return nil;
    }, TMP_5.$$arity = 1);

    Opal.defn(self, '$getConductResult', TMP_7 = function $$getConductResult(command) {
      var $a, $b, TMP_6, $c, self = this, diceCount = nil, thirstyPoint = nil, diceList = nil, gloryDiceCount = nil, calculationProcess = nil, thirstyPointMarker = nil, result = nil;

      if ((($a = /^DR(\d*)(\+(\d+))?$/['$==='](command)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      diceCount = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
      if (diceCount['$=='](0)) {
        diceCount = 4};
      thirstyPoint = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3)).$to_i();
      diceList = self.$rollDiceList(diceCount);
      gloryDiceCount = self.$getGloryDiceCount(diceList);
      ($a = ($b = gloryDiceCount).$times, $a.$$p = (TMP_6 = function(){var self = TMP_6.$$s || this;

      return diceList['$<<'](10)}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6), $a).call($b);
      $c = self.$getThirstyAddedResult(diceList, thirstyPoint), $a = Opal.to_ary($c), diceList = ($a[0] == null ? nil : $a[0]), calculationProcess = ($a[1] == null ? nil : $a[1]), $c;
      thirstyPointMarker = ((function() {if (thirstyPoint['$=='](0)) {
        return ""
        } else {
        return "+" + (thirstyPoint)
      }; return nil; })());
      result = "(" + (command) + ") ＞ " + (diceCount) + "D6" + (thirstyPointMarker) + " ＞ ";
      if ((($a = calculationProcess['$empty?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        result = $rb_plus(result, "[ " + (calculationProcess) + " ] ＞ ")
      };
      result = $rb_plus(result, "[ " + (diceList.$join(", ")) + " ]");
      return result;
    }, TMP_7.$$arity = 1);

    Opal.defn(self, '$rollDiceList', TMP_9 = function $$rollDiceList(diceCount) {
      var $a, $b, TMP_8, self = this, dice = nil, str = nil, diceList = nil;

      $b = self.$roll(diceCount, 6), $a = Opal.to_ary($b), dice = ($a[0] == null ? nil : $a[0]), str = ($a[1] == null ? nil : $a[1]), $b;
      diceList = ($a = ($b = str.$split(/,/)).$collect, $a.$$p = (TMP_8 = function(i){var self = TMP_8.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_8.$$s = self, TMP_8.$$arity = 1, TMP_8), $a).call($b).$sort();
      return diceList;
    }, TMP_9.$$arity = 1);

    Opal.defn(self, '$getGloryDiceCount', TMP_10 = function $$getGloryDiceCount(diceList) {
      var self = this, oneCount = nil, sixCount = nil, gloryDiceCount = nil;

      oneCount = self.$countTargetDice(diceList, 1);
      sixCount = self.$countTargetDice(diceList, 6);
      gloryDiceCount = $rb_plus((($rb_divide(oneCount, 2)).$floor()), (($rb_divide(sixCount, 2)).$floor()));
      return gloryDiceCount;
    }, TMP_10.$$arity = 1);

    Opal.defn(self, '$countTargetDice', TMP_12 = function $$countTargetDice(diceList, target) {
      var $a, $b, TMP_11, self = this;

      return ($a = ($b = diceList).$select, $a.$$p = (TMP_11 = function(i){var self = TMP_11.$$s || this;
if (i == null) i = nil;
      return i['$=='](target)}, TMP_11.$$s = self, TMP_11.$$arity = 1, TMP_11), $a).call($b).$count();
    }, TMP_12.$$arity = 2);

    Opal.defn(self, '$getThirstyAddedResult', TMP_15 = function $$getThirstyAddedResult(diceList, thirstyPoint) {
      var $a, $b, TMP_13, $c, TMP_14, $d, self = this, targetIndex = nil, textList = nil;

      if (thirstyPoint['$=='](0)) {
        return [diceList, ""]};
      targetIndex = ($a = ($b = diceList).$rindex, $a.$$p = (TMP_13 = function(i){var self = TMP_13.$$s || this;
if (i == null) i = nil;
      return $rb_le(i, 6)}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13), $a).call($b);
      if ((($a = targetIndex['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return [diceList, ""]};
      textList = [];
      ($a = ($c = diceList).$each_with_index, $a.$$p = (TMP_14 = function(item, index){var self = TMP_14.$$s || this;
if (item == null) item = nil;if (index == null) index = nil;
      if (targetIndex['$=='](index)) {
          return textList['$<<']("" + (item) + "+" + (thirstyPoint))
          } else {
          return textList['$<<'](item.$to_s())
        }}, TMP_14.$$s = self, TMP_14.$$arity = 2, TMP_14), $a).call($c);
      ($a = targetIndex, $d = diceList, $d['$[]=']($a, $rb_plus($d['$[]']($a), thirstyPoint)));
      return [diceList, textList.$join(", ")];
    }, TMP_15.$$arity = 2);

    Opal.defn(self, '$getResistResult', TMP_16 = function $$getResistResult(command) {
      var $a, self = this, diceCount = nil, diceList = nil, result = nil;

      if ((($a = /^DRR(\d+)$/['$==='](command)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      diceCount = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
      if (diceCount['$=='](0)) {
        diceCount = 4};
      diceList = self.$rollDiceList(diceCount);
      return result = "(" + (command) + ") ＞ " + (diceCount) + "D6 ＞ [ " + (diceList.$join(", ")) + " ]";
    }, TMP_16.$$arity = 1);

    Opal.defn(self, '$getReactionResult', TMP_17 = function $$getReactionResult(command) {
      var $a, $b, self = this, typeText1 = nil, typeText2 = nil, name = nil, table = nil, tableText = nil, number = nil, type1 = nil, type1_indexTexts = nil, type2 = nil, type2_indexTexts = nil, tensValue = nil, isBefore = nil, type = nil, indexTexts = nil, typeText = nil, resultText = nil, index = nil;

      if ((($a = /^RT((\w)(\w))?/['$==='](command.$upcase())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      typeText1 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      typeText2 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      name = "반응표";
      table = self.$getReactionTable();
      $b = self.$get_table_by_d66(table), $a = Opal.to_ary($b), tableText = ($a[0] == null ? nil : $a[0]), number = ($a[1] == null ? nil : $a[1]), $b;
      type1 = ["드라크\t로젠부르크\t헬스가르드\t더스트하임\t아발롬\t노스페라스"];
      type1_indexTexts = ["D", "R", "H", "M", "A", "N"];
      type2 = ["영주\t근위\t방랑\t현자\t사냥꾼\t야수"];
      type2_indexTexts = ["F", "G", "R", "W", "J", "N"];
      tensValue = ($rb_divide(number.$to_i(), 10)).$floor();
      isBefore = ($rb_lt(tensValue, 4));
      type = ((function() {if (isBefore !== false && isBefore !== nil && isBefore != null) {
        return type1
        } else {
        return type2
      }; return nil; })());
      indexTexts = ((function() {if (isBefore !== false && isBefore !== nil && isBefore != null) {
        return type1_indexTexts
        } else {
        return type2_indexTexts
      }; return nil; })());
      typeText = ((function() {if (isBefore !== false && isBefore !== nil && isBefore != null) {
        return typeText1
        } else {
        return typeText2
      }; return nil; })());
      resultText = "";
      if ((($a = typeText['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        resultText = self.$getReactionTextFull(type, tableText)
        } else {
        index = indexTexts.$index(typeText);
        if ((($a = index['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return nil};
        resultText = self.$getReactionTex(index, type, tableText);
      };
      return "" + (name) + "(" + (number) + ") ＞ " + (resultText);
    }, TMP_17.$$arity = 1);

    Opal.defn(self, '$getReactionTextFull', TMP_19 = function $$getReactionTextFull(type, tableText) {
      var $a, $b, TMP_18, self = this, resultTexts = nil;

      resultTexts = [];
      ($a = ($b = type.$count()).$times, $a.$$p = (TMP_18 = function(index){var self = TMP_18.$$s || this;
if (index == null) index = nil;
      return resultTexts['$<<'](self.$getReactionTex(index, type, tableText))}, TMP_18.$$s = self, TMP_18.$$arity = 1, TMP_18), $a).call($b);
      return resultTexts.$join("／");
    }, TMP_19.$$arity = 2);

    Opal.defn(self, '$getReactionTex', TMP_20 = function $$getReactionTex(index, type, tableText) {
      var self = this, typeName = nil, texts = nil, string = nil;

      typeName = type['$[]'](index);
      texts = tableText.$split(/\t/);
      string = texts['$[]'](index);
      return "" + (typeName) + "：" + (string);
    }, TMP_20.$$arity = 3);

    Opal.defn(self, '$getReactionTable', TMP_21 = function $$getReactionTable() {
      var self = this, text = nil;

      text = "하늘에 빛나는 붉은 달을 올려본다\t콧방귀를 뀐다\t헛기침을 한다\t미간을 찌푸리고 생각에 잠긴다\t하품을 참는다\t명왕령의 방향을 노려본다\n작게 한숨을 쉰다\t앞머리를 쓸어 올린다\t눈썹을 찌푸린다\t주변을 평가하는 눈으로 본다\t머리를 긁적인다\t혀를 찬다\n상대를 내려다보듯이 본다\t자신의 머리를 만진다\t투덜거린다\t손에 책을 구현화시켜 적어넣는다\t손에 생긴 과일을 먹는다\t고개숙여 바닥이나 지면을 노려본다\n지그시 눈을 감고 말을 건다\t혼자서 작게 웃는다\t무표정하게 상대를 관찰한다\t재미없다는 듯이 바라본다\t붙임성 좋은 웃음을 짓는다\t무의식적으로 눈물이 흐른다\n희미하게 미소짓는다\t콧노래를 부른다\t발밑에 지옥문이 생긴다\t안정된 발걸음으로 다가간다\t밤새가 어깨에 날아든다\t입술을 깨문다\n품 속에서 박쥐가 날아오른다\t한쪽 발을 중심으로 빙그르르 돈다\t주변에 작게 원망하는 목소리가 울린다\t눈을 감고 과거를 생각한다\t검은 고양이가 발밑에 재롱부리며 달라붙는다\t가슴을 누르고 지그시 생각한다\n머리 위를 박쥐가 소용돌이 치듯이 난다\t꽃잎을 구현화해 흩날린다\t비난하는 듯한 눈빛을 향한다\t발자취에 옅은 안개가 낀다\t주변에 요정의 빛이 춤춘다\t고개를 크게 흔들어 사념을 쫓는다\n눈썹을 찌푸리는 동시에 눈이 붉게 빛난다\t의상이나 갑옷의 색이나 장식을 바꾼다\t직립부동의 자세로 서있는다\t쓴웃음을 지으며 다가선다\t순식간에 상대편에 나타난다\t마음 속의 분노로 험악한 얼굴이 된다\n손에 있는 와인을 가볍게 마신다\t자신에게 취해 눈을 감는다\t질린듯한 모습으로 한숨을 쉰다\t현상을 분석하는 혼잣말을 한다\t순식간에 상대에게서 멀어진다\t의연한 태도로 맞선다\n몸 전체에서 옅은 붉은 색의 오오라가 피어난다\t구현화한 꽃을 손에서 가지고 논다\t갑자기 돌아서며 노려본다\t흥미깊은듯이 질문한다\t벌레나 식물에게 정신이 팔린다\t마른 웃음소리를 흘린다\n겁 없는 웃음을 짓는다\t마음에 드는 상대를 꼬시려고 한다\t주변의 공기가 얼어붙는다\t눈 앞의 양식에 불평을 말한다\t순수한 웃음을 보인다\t자신의 혈족을 깎아내리는 말을 한다\n바람 없이 머리카락이 날린다\t어깨를 움츠린다\t가슴에 손을 얹고 자신을 안정시킨다\t무감동하게 가볍게 인사한다\t실수로 누군가를 말려들게해서 넘어진다\t조용한 분노와 함께 눈이 창백하게 빛난다\n질린 눈으로 상대를 응시한다\t자신의 무기에 입맞춤을 한다\t손에 구현화한 사슬을 가지고 논다\t손에 구현화한 펜을 가지고 논다\t누군가에게 응석부리듯이 기댄다\t들꽃을 만지고 그것을 시들게 한다\n발밑에 작은 회오리바람이 일어난다\t권유하는 듯이 누군가의 손을 잡는다\t주변을 엄격한 눈으로 바라본다\t눈을 뜨고 감탄한다\t웃음을 띠며 고개를 끄덕인다\t지친 모습으로 희미하게 빛나는 숨을 내뱉는다\n격정이나 긴장감에 머리가 거꾸로 선다\t악기를 구현화해 연주한다\t동료에게 의심의 시선을 보낸다\t책, 소매, 망토 등으로 입가를 가린다\t작게 고개를 갸웃거린다\t자신의 문장을 멍하게 바라본다\n붉은 달빛을 받으며 눈을 감는다\t상대에게 윙크한다\t감정에 맞춰 주변에 사슬이 구현화된다\t공중에 떠서 미끄러지듯이 나아간다\t수많은 검은 깃털이 하늘에 흩날린다\t자조적으로 작게 웃는다\n무기를 들고 맹세를 선창한다\t의상에 붙은 먼지를 털어낸다\t타락에 대해 충고한다\t무감정하게 상황을 분석한다\t과일을 꺼내서 먹는다\t지친 눈으로 멍하게 다른 사람을 본다\n자신의 문장을 쭉 바라본다\t망토에서 무수한 나비가 날아오른다\t차가운 시선으로 상대를 훑어본다\t순간, 모습이 안개에 휩싸여 희미해진다\t뭔가 있어 보이는 말이나 행동을 한다\t뭔가 결심한듯한듯이 얼굴을 들어올린다\n상대의 눈을 들여다 봐 마음을 짐작한다\t주군의 옆에 살짝 다가선다\t일전의 싸움에 대해 얘기한다\t상대를 헤아리듯이 바라본다\t“적”을 생각해내 험악한 눈이 된다\t짐승과 같이 거칠게 호흡한다\n자신의 영지를 생각한다\t문장이 새겨진 방패를 들어 올린다\t바람에 머리카락이 나부낀다\t안경을 구현화해 쓴다\t침을 뱉는다\t그렁그렁한 눈으로 상대를 올려다본다\n종자를 시중들게 한다\t무기를 차고 기품있게 인사한다\t구현화한 탈것을 쓰다듬는다\t조그마한 점을 주의깊게 본다\t구현화한 무기를 쓰다듬는다\t고개를 숙이고 심호흡한다\n종자의 시중을 받는다\t자신의 방패의 문장을 손가락으로 따라그린다\t동료의 어깨를 두드린다, 혹은 안는다\t과장되게 한숨을 쉬어보인다\t음울한 눈으로 허공을 노려본다\t벽이나 바닥에 손톱을 세워 할퀸다\n마음에 드는 상대에게 손짓한다\t다른 기사에게 바싹 다가간다\t상쾌하게 웃는다\t눈을 감고 사색에 잠긴다\t옷자락에서 나타난 뱀이나 거미를 쓰다듬는다\t자신에게 이르는 혼잣말을 한다\n근심에 가득차 생각에 잠긴다\t주군의 등뒤에서 상대를 노려본다\t소리 높여 이름을 댄다\t다른 기사에게 조언한다\t골똘히 생각하는 눈으로 밤하늘을 본다\t타락의 전조를 지그시 본다\n무겁게 끄덕인다\t주군의 앞, 또는 옆에서 무릎꿇는다\t주변에 적극적으로 말을 건다\t얼버무리듯이 헛기침을 한다\t자신의 무기를 핥는다\t다른 기사에게서 눈을 돌린다\n상냥한 미소를 짓는다\t겸연쩍다는듯 얼굴을 붉힌다\t자신의 이름에 맹세한다\t작게 인사한다\t어둡게 웃음짓는다\t다른 기사의 눈치를 살핀다\n슬쩍 자신의 문장을 보여준다\t누군가의 앞을 가로막고 선다\t과장되게 누군가를 치켜세운다\t다른 기사에게 눈으로 신호를 보낸다\t그늘에 숨는다\t상대를 노려보며 신음한다\n와인잔을 다른 기사에게 건넨다\t정신사납게 돌아다닌다\t다른 기사에게 시합을 신청한다\t불가사의한 웃음을 짓는다\t다른 기사의 문장을 관찰한다\t자신의 손가락을 가볍게 핥는다\n가만히 풍경을 바라본다\t수줍은 웃음을 짓는다\t망토를 과장되게 펄럭인다\t하늘에 뜬 별들을 바라본다\t분위기를 못읽는 발언을 한다\t다른 기사에게 거리를 두어진다\n손바닥에 체스말을 구현화한다\t긴장한 시선으로 주변을 둘러본다\t상대를 치켜 세우며 입맞춤을 요구한다\t깊은 지식으로 자세한 설명을 한다\t갑자기 뒤돌아보며 등뒤를 경계한다\t영악한 웃음을 짓는다\n가슴을 펴고 자신있게 발언한다\t마음 속에서 다른 기사와 시합을 한다\t자신의 고향을 떠올린다\t미래에 대해 점쳐본다\t과거의 원통함에 피눈물을 흘린다\t자신의 피부를 손톱등으로 상처입힌다\n빠르게 사죄한다\t가만히 기다리고 있는다\t자신의 문장에 대해 얘기한다\t사소한 예언을 한다\t상어와 같이 웃는다\t몰래 입맛을 다신다\n다른 기사를 정면에서 칭찬한다\t주군을 지그시 바라본다\t다른 기사와 잡담을 한다\t소문의 일종을 다른 기사에게 속삭인다\t그 자리에 없는 기사를 비웃는다\t요염하게 곁눈질을 보낸다\n다른 기사의 머리나 볼을 쓰다듬는다\t주군을 치켜 세운다\t곤란한듯이 작게 신음한다\t사소한 물건을 흥미깊게 관찰한다\t다른 기사와의 거리를 느낀다\t애처로운 눈으로 자신의 문장을 바라본다\n우렁차게 이름을 댄다\t주군의 소매를 꽉 쥔다\t윗사람의 앞에서 무릎을 꿇고 예를 다한다\t달을 올려다보고 드라쿨을 칭송한다\t나직하게 이름을 댄다\t사냥감을 노리는 눈으로 다른 기사를 본다\n입가를 가리며 기품있게 웃는다\t주군에 대한 주변의 태도를 비난한다\t아랫사람에게 미소짓는다\t다른 기사의 감정에 충고한다\t아랫사람을 내려다보는 눈으로 본다\t자학적인 말을 한다\n";
      return text.$split(/\n/);
    }, TMP_21.$$arity = 0);

    Opal.defn(self, '$getCorruptionResult', TMP_22 = function $$getCorruptionResult(command) {
      var $a, $b, self = this, modify = nil, name = nil, table = nil, number = nil, number_text = nil, index = nil, text = nil;

      if ((($a = /^CT(\d+)$/['$==='](command.$upcase())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      modify = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
      name = "타락표";
      table = [[0, "당신은 완전히 타락했다. 이 시점에서 당신은 [월 플라워]가 되어 늑대인간, 검은 산양, 야수 중 하나가 된다. 그 [막]의 종료 후에 세션에서 퇴장한다. 247페이지의 「소멸・완전한 타락」을 참조한다."], [1, "당신의 육체는 정신에 걸맞는 변화를 일으킨다……. 「타락의 전조표」를 2번 굴리고 특징을 얻는다. 이 세션 종료 후, 【길】을 「야수」로 변경한다.(이미「야수」라면 【길】은 변하지 않는다)"], [3, "당신의 육체는 정신에 걸맞는 변화를 일으킨다……. 「타락의 전조표」를 1번 굴리고 특징을 얻는다. 이 세션 종료 후, 【길】을 「야수」로 변경한다.(이미「야수」라면 【길】은 변하지 않는다)"], [5, "고귀한 마음도 언젠가는 타락한다. 당신이 지금 가장 많은 루주를 얻은 대상에 대한 루주를 전부 잃고, 같은 수 만큼의 누아르를 얻는다. 누아르를 얻은 결과, 【갈증】이 3점 이상이 된 경우 다시 타락표를 굴린다."], [6, "내면에 잠든 짐승의 숨결……당신이 지금 【갈증】을 얻은 누아르의 대상에게 임의의 누아르 2점을 획득한다."], [7, "내면에 잠든 짐승의 숨결……당신이 지금 【갈증】을 얻은 누아르의 대상에게 임의의 누아르 1점을 획득한다."], [8, "날뛰는 마음을 가라앉힌다……다행히 아무 일도 없었다."], [99, "당신은 미쳐 날뛰는 감정을 억누르고 이성을 되찾았다! 【갈증】이 1 감소한다!"]];
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), number = ($a[0] == null ? nil : $a[0]), number_text = ($a[1] == null ? nil : $a[1]), $b;
      index = ($rb_minus(number, modify));
      self.$debug("index", index);
      text = self.$get_table_by_number(index, table);
      return "2D6[" + (number_text) + "]-" + (modify) + " ＞  " + (name) + "(" + (index) + ") ＞ " + (text);
    }, TMP_22.$$arity = 1);

    Opal.defn(self, '$getTableResult', TMP_23 = function $$getTableResult(command) {
      var $a, $b, self = this, info = nil, name = nil, type = nil, table = nil, $case = nil, text = nil, number = nil;

      info = (($a = Opal.cvars['@@tables']) == null ? nil : $a)['$[]'](command.$upcase());
      if ((($a = info['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil};
      name = info['$[]']("name");
      type = info['$[]']("type");
      table = info['$[]']("table");
      $b = (function() {$case = type;if ("2D6"['$===']($case)) {return self.$get_table_by_2d6(table)}else if ("1D6"['$===']($case)) {return self.$get_table_by_1d6(table)}else {return nil}})(), $a = Opal.to_ary($b), text = ($a[0] == null ? nil : $a[0]), number = ($a[1] == null ? nil : $a[1]), $b;
      if ((($a = (text['$nil?']())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil};
      return "" + (name) + "(" + (number) + ") ＞ " + (text);
    }, TMP_23.$$arity = 1);

    Opal.defn(self, '$getCorruptionTable', TMP_24 = function $$getCorruptionTable() {
      var self = this;

      return nil;
    }, TMP_24.$$arity = 0);

    (Opal.cvars['@@tables'] = $hash2(["CS", "BT"], {"CS": $hash2(["name", "type", "table"], {"name": "타락의 전조표", "type": "2D6", "table": ["당신은 완전히 타락했다. 이 시점에서 당신은 [월 플라워]가 되어 늑대인간, 검은 산양, 야수 중 하나가 된다. 그 [막]의 종료 후에 세션에서 퇴장한다. 247페이지의 「소멸・완전한 타락」을 참조한다.", "짐승 그 자체의 머리(늑대, 산양, 박쥐 중 하나)", "밤새의 날개", "박쥐의 날개", "갈퀴발톱이 있는 이형의 팔", "뒤틀린 두 개의 뿔", "늑대의 귀와 꼬리", "창백해진 피부", "이상한 빛을 발하는 눈", "튀어나온 송곳니", "눈에 보이는 변화는 없다……"]}), "BT": $hash2(["name", "type", "table"], {"name": "인연 내용 결정표：루주／누아르", "type": "1D6", "table": ["연민(Pity)　상대를 불쌍히 여기고 동정한다. ／모멸(Contempt)　상대를 깔보고 경멸한다.", "친구(Friend)　상대에게 우정을 갖는다. ／질투(Jealousy)　상대를 부러워하고 질투한다. ", "신뢰(Trust)　상대를 신뢰한다. ／욕망(Desire)　상대를 원하고 나의 것으로 만들고 싶어한다.", "사랑(Love)　상대를 좋아하고 사랑한다. ／분노(Anger)　상대에게 분노를 느낀다. ", "존경(Respect)　상대의 실력이나 정신을 존경한다. ／살의(Kill)　상대에게 살의를 느끼고 없애고자 한다.", "복종(Obey)　상대를 주군으로서 받들고 충의를 맹세한다. ／복수(Vendetta)　상대를 원망하고 원수로 여긴다."]})}));

    return self.$setPrefixes($rb_plus(["DR.*", "RT.*", "CT\\d+"], (($a = Opal.cvars['@@tables']) == null ? nil : $a).$keys()));
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);

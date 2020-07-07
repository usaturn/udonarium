/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$==', '$>', '$checkRoll', '$roll', '$collect', '$split', '$count', '$<=', '$+', '$empty?', '$!=', '$*']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Airgetlamh');

    var $nesting = [self].concat($parent_nesting), $Airgetlamh_initialize$1, $Airgetlamh_rollDiceCommand$2, $Airgetlamh_checkRoll$3;

    self.$$prototype.sortType = nil;
    
    Opal.const_set($nesting[0], 'ID', "Airgetlamh");
    Opal.const_set($nesting[0], 'NAME', "朱の孤塔のエアゲトラム");
    Opal.const_set($nesting[0], 'SORT_KEY', "あけのことうのえあけとらむ");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "【Reg2.0『THE ANSWERER』～】\n" + "・調査判定（成功数を表示）：[n]AA[m]\n" + "・命中判定（ダメージ表示）：[n]AA[m]*p[+t][Cx]\n" + "【～Reg1.1『昇華』】\n" + "・調査判定（成功数を表示）：[n]AL[m]\n" + "・命中判定（ダメージ表示）：[n]AL[m]*p\n" + "----------------------------------------\n" + "[]内のコマンドは省略可能。\n" + "\n" + "「n」でダイス数（攻撃回数）を指定。省略時は「2」。\n" + "「m」で目標値を指定。省略時は「6」。\n" + "「p」で威力を指定。「*」は「x」で代用可。\n" + "「+t」でクリティカルトリガーを指定。省略可。\n" + "「Cx」でクリティカル値を指定。省略時は「1」、最大値は「3」、「0」でクリティカル無し。\n" + "\n" + "攻撃力指定で命中判定となり、成功数ではなく、ダメージを結果表示します。\n" + "クリティカルヒットの分だけ、自動で振り足し処理を行います。\n" + "（ALコマンドではクリティカル処理を行いません）\n" + "\n" + "【書式例】\n" + "・AL → 2d10で目標値6の調査判定。\n" + "・5AA7*12 → 5d10で目標値7、威力12の命中判定。\n" + "・AA7x28+5 → 2d10で目標値7、威力28、クリティカルトリガー5の命中判定。\n" + "・9aa5*10C2 → 9d10で目標値5、威力10、クリティカル値2の命中判定。\n" + "・15AAx4c0 → 15d10で目標値6、威力4、クリティカル無しの命中判定。\n");
    self.$setPrefixes([["(\\d+)?A(A|L)(\\d+)?((x|\\*)(\\d+)(\\+(\\d+))?)?(C(\\d+))?"]]);
    
    Opal.def(self, '$initialize', $Airgetlamh_initialize$1 = function $$initialize() {
      var $iter = $Airgetlamh_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Airgetlamh_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Airgetlamh_initialize$1, false), $zuper, $iter);
      return (self.sortType = 1);
    }, $Airgetlamh_initialize$1.$$arity = 0);
    
    Opal.def(self, '$rollDiceCommand', $Airgetlamh_rollDiceCommand$2 = function $$rollDiceCommand(command) {
      var $a, self = this, diceCount = nil, target = nil, damage = nil, criticalTrigger = nil, criticalNumber = nil;

      
      if ($truthy(/(\d+)?A(A|L)(\d+)?((x|\*)(\d+)(\+(\d+))?)?(C(\d+))?$/i['$==='](command))) {
        
        diceCount = ($truthy($a = $$($nesting, 'Regexp').$last_match(1)) ? $a : 2).$to_i();
        target = ($truthy($a = $$($nesting, 'Regexp').$last_match(3)) ? $a : 6).$to_i();
        damage = ($truthy($a = $$($nesting, 'Regexp').$last_match(6)) ? $a : 0).$to_i();
        if ($$($nesting, 'Regexp').$last_match(2)['$==']("L")) {
          
          criticalTrigger = 0;
          criticalNumber = 0;
        } else {
          
          criticalTrigger = ($truthy($a = $$($nesting, 'Regexp').$last_match(8)) ? $a : 0).$to_i();
          criticalNumber = ($truthy($a = $$($nesting, 'Regexp').$last_match(10)) ? $a : 1).$to_i();
        };
        if ($truthy($rb_gt(criticalNumber, 4))) {
          criticalNumber = 3};
        return self.$checkRoll(diceCount, target, damage, criticalTrigger, criticalNumber);};
      return nil;
    }, $Airgetlamh_rollDiceCommand$2.$$arity = 1);
    return (Opal.def(self, '$checkRoll', $Airgetlamh_checkRoll$3 = function $$checkRoll(diceCount, target, damage, criticalTrigger, criticalNumber) {
      var $a, $b, $c, $$4, $$5, $$6, self = this, totalSuccessCount = nil, totalCriticalCount = nil, text = nil, rollCount = nil, _dice = nil, diceText = nil, diceArray = nil, successCount = nil, criticalCount = nil, result = nil, isDamage = nil, totalDamage = nil;

      
      totalSuccessCount = 0;
      totalCriticalCount = 0;
      text = "";
      rollCount = diceCount;
      while ($truthy($rb_gt(rollCount, 0))) {
        
        $c = self.$roll(rollCount, 10, self.sortType), $b = Opal.to_ary($c), (_dice = ($b[0] == null ? nil : $b[0])), (diceText = ($b[1] == null ? nil : $b[1])), $c;
        diceArray = $send(diceText.$split(/,/), 'collect', [], ($$4 = function(i){var self = $$4.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          return i.$to_i();}, $$4.$$s = self, $$4.$$arity = 1, $$4));
        successCount = $send(diceArray, 'count', [], ($$5 = function(i){var self = $$5.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          return $rb_le(i, target);}, $$5.$$s = self, $$5.$$arity = 1, $$5));
        criticalCount = $send(diceArray, 'count', [], ($$6 = function(i){var self = $$6.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          return $rb_le(i, criticalNumber);}, $$6.$$s = self, $$6.$$arity = 1, $$6));
        totalSuccessCount = $rb_plus(totalSuccessCount, successCount);
        totalCriticalCount = $rb_plus(totalCriticalCount, criticalCount);
        if ($truthy(text['$empty?']())) {
        } else {
          text = $rb_plus(text, "+")
        };
        text = $rb_plus(text, "" + (successCount) + "[" + (diceText) + "]");
        rollCount = criticalCount;
      };
      result = "";
      isDamage = damage['$!='](0);
      if ($truthy(isDamage)) {
        
        totalDamage = $rb_plus($rb_times(totalSuccessCount, damage), $rb_times(totalCriticalCount, criticalTrigger));
        result = $rb_plus(result, "" + "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (text) + " ＞ Hits：" + (totalSuccessCount) + "*" + (damage));
        if ($truthy($rb_gt(criticalTrigger, 0))) {
          result = $rb_plus(result, "" + " + Trigger：" + (totalCriticalCount) + "*" + (criticalTrigger))};
        result = $rb_plus(result, "" + " ＞ " + (totalDamage) + "ダメージ");
      } else {
        result = $rb_plus(result, "" + "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (text) + " ＞ 成功数：" + (totalSuccessCount))
      };
      if ($truthy($rb_gt(totalCriticalCount, 0))) {
        result = $rb_plus(result, "" + " / " + (totalCriticalCount) + "クリティカル")};
      return result;
    }, $Airgetlamh_checkRoll$3.$$arity = 5), nil) && 'checkRoll';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);

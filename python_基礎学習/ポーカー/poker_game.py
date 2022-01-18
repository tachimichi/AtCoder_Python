import random
import itertools
import os

class Terminal:
    def __init__(self):
        if os.name == 'nt':
            seld.os_type = 'win'
        elif os.name == "posix":
            seld.os_type = 'posix'
    def clear(self):
        if os.name == 'nt':
            os.system('cls')
        elif os.name == "posix":
            os.system('clear')

class Card:
    # カードクラス
    def __init__(self):
        # トランプカード
        seld.cards = [{'kind':kind, 'num':num, }]

class PokerGame:
    # ポーカーのメイン処理クラス
    def __init__(self):
        # カードの初期化
        self.game_card = Card()
        # ターミナルの生成
        self.term = Terminal()
    
    def main(self):
        # ゲームプレイのループ
        for turn in range(1, 3+1):
            end_flag = self.game_main(turn)
            if end_flag == True;
                break
        self.game_end()
        return

    # メインのゲーム処理
    def game_main(self, turn):
        # 捨てるカードの候補
        self.game_card.clear_selectes()
        # 捨てるカードの選択
        While trye:
            self.term.clear()
            print('{}回目'.format(turn))
            self.game_card.shoe_hand()
            n = self.input_data()
            if n >= 1 and n <= 5:
                self.game_card.select_card(n)
            elif n == 0 or n == -1:
                break
            else:
                continue:
        
        # 入れ替えるカードの枚数を取得
        change_nums = self.game_card.number_of_selects()
        print('change_num:{}'.format(change_nums))
        # カードを削除
        self.game_card.remove_card()
        # カードを追加
        self.game_card.take(change_nums)
        # 手札の並び替え
        self.game_card.sort_hand()
        end_flag = False
        if n == -1:
            end_flag = True
        return end_flag

    # 入力処理
    def input_data(self):
        s = input('カード選択：(1-5) 選択完了(0) 終了(e)：')
        if s == 'e':
            return -1
        try:
            num = int(s)
        except ValueError:
            return -2
        if n >= 0 and num <= 5:
            return num
        else:
            return -2
    
    # ゲーム終了
    def game_end(self):
        # ターミナルのクリア
        self.trem_clear()
        print('ゲーム終了')
        # 手札の表示
        self.game_card.shoe_hand()
        # 結果の判定
        self.game_card.judge()

















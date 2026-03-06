# -*- coding: utf-8 -*-
"""
Step 01: 基本的な損益計算書（PL）
5カ年経営計画書のPLシートを再現する最初の一歩
"""

# ===========================================
# 1. データ定義（辞書で売上・費用を定義）
# ===========================================

# 年度別データ（元Excel: PLシートより）
fiscal_years = ["R2", "R3", "R4"]

# 売上データ
revenue = {
    "R2": {
        "training_revenue": 43054612,    # 訓練給付金等
        "welfare_revenue": 9210000,      # 福祉的就労売上
        "other_revenue": 0               # その他収入
    },
    "R3": {
        "training_revenue": 114485450,
        "welfare_revenue": 22380025,
        "other_revenue": 0
    },
    "R4": {
        "training_revenue": 139618300,
        "welfare_revenue": 26820027,
        "other_revenue": 0
    }
}

# 費用データ
expenses = {
    "R2": {
        "cost": 49636638,      # 事業原価
        "expense": 9566638,    # 経費
        "personnel": 43375000, # 総人件費
        "interest": 245000     # 支払利息
    },
    "R3": {
        "cost": 104757564,
        "expense": 19804564,
        "personnel": 87533000,
        "interest": 420000
    },
    "R4": {
        "cost": 81972549,
        "expense": 18180549,
        "personnel": 104856000,
        "interest": 420000
    }
}

# ===========================================
# 2. 計算関数
# ===========================================

def calc_total_revenue(year):
    """総売上を計算"""
    r = revenue[year]
    return r["training_revenue"] + r["welfare_revenue"] + r["other_revenue"]

def calc_gross_profit(year):
    """売上総利益を計算"""
    return calc_total_revenue(year) - expenses[year]["cost"]

def calc_operating_profit(year):
    """営業利益を計算
    注: 元Excelでは人件費は事業原価に含まれている
    営業利益 = 売上総利益 - 経費
    """
    gross = calc_gross_profit(year)
    exp = expenses[year]
    return gross - exp["expense"]

def calc_ordinary_profit(year):
    """経常利益を計算"""
    operating = calc_operating_profit(year)
    interest = expenses[year]["interest"]
    return operating - interest

# ===========================================
# 3. 表示
# ===========================================

def format_yen(amount):
    """金額をカンマ区切りで表示"""
    if amount >= 0:
        return f"{amount:>14,.0f}"
    else:
        return f"{amount:>14,.0f}"  # マイナスは自動表示

def print_pl():
    """損益計算書を表示"""
    print("=" * 70)
    print("Profit & Loss Statement (PL)")
    print("=" * 70)
    print(f"{'Item':<20} {'R2':>16} {'R3':>16} {'R4':>16}")
    print("-" * 70)

    # 売上
    print(f"{'Total Revenue':<20}", end="")
    for year in fiscal_years:
        print(format_yen(calc_total_revenue(year)), end="")
    print()

    # 売上総利益
    print(f"{'Gross Profit':<20}", end="")
    for year in fiscal_years:
        print(format_yen(calc_gross_profit(year)), end="")
    print()

    # 営業利益
    print(f"{'Operating Profit':<20}", end="")
    for year in fiscal_years:
        print(format_yen(calc_operating_profit(year)), end="")
    print()

    # 経常利益
    print(f"{'Ordinary Profit':<20}", end="")
    for year in fiscal_years:
        print(format_yen(calc_ordinary_profit(year)), end="")
    print()

    print("=" * 70)

# ===========================================
# 4. 実行
# ===========================================

if __name__ == "__main__":
    print_pl()

    # おまけ：黒字転換年度を確認
    print("\n[Analysis]")
    for year in fiscal_years:
        profit = calc_operating_profit(year)
        status = "POSITIVE" if profit > 0 else "NEGATIVE"
        print(f"{year}: Operating Profit {profit:>14,.0f} -> {status}")

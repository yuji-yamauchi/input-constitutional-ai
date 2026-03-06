# -*- coding: utf-8 -*-
"""
5カ年経営計画シミュレーター
元Excel: 【参考資料１】5カ年経営計画書.xlsx を再現

Run with: python -m streamlit run pl_simulator.py
"""

import streamlit as st
import pandas as pd

# ページ設定
st.set_page_config(page_title="PL Simulator", layout="wide")
st.title("5カ年経営計画シミュレーター")

# サイドバーで年度選択
st.sidebar.header("年度選択")
year = st.sidebar.selectbox("シミュレーション年度", ["R2", "R3", "R4", "R5", "R6"])

# ===========================================
# 入力セクション
# ===========================================
st.header("1. 売上入力")

col1, col2 = st.columns(2)

with col1:
    st.subheader("訓練給付金等")
    training_revenue = st.number_input(
        "訓練給付金収入",
        value=114485450,
        step=1000000,
        format="%d"
    )

with col2:
    st.subheader("福祉的就労売上")
    welfare_revenue = st.number_input(
        "福祉売上",
        value=22380025,
        step=100000,
        format="%d"
    )

other_revenue = st.number_input("その他収入", value=0, step=100000, format="%d")

# 総売上計算
total_revenue = training_revenue + welfare_revenue + other_revenue

st.divider()

# ===========================================
# 費用入力セクション
# ===========================================
st.header("2. 費用入力")

col3, col4 = st.columns(2)

with col3:
    st.subheader("事業原価")
    cost = st.number_input(
        "事業原価（人件費含む）",
        value=104757564,
        step=1000000,
        format="%d"
    )

    expense = st.number_input(
        "経費",
        value=19804564,
        step=100000,
        format="%d"
    )

with col4:
    st.subheader("人件費・利息")
    personnel = st.number_input(
        "総人件費",
        value=87533000,
        step=1000000,
        format="%d"
    )

    interest = st.number_input(
        "支払利息",
        value=420000,
        step=10000,
        format="%d"
    )

st.divider()

# ===========================================
# PL計算ロジック（Excelの数式を再現）
# ===========================================

# 売上総利益 = 総売上 - 事業原価
gross_profit = total_revenue - cost

# 営業利益 = 売上総利益 - 経費
operating_profit = gross_profit - expense

# 経常利益 = 営業利益 - 支払利息
ordinary_profit = operating_profit - interest

# 税金（経常利益の40%、赤字の場合は0）
tax = ordinary_profit * 0.4 if ordinary_profit > 0 else 0

# 税引後利益
net_profit = ordinary_profit - tax

# ===========================================
# 結果表示
# ===========================================
st.header("3. 損益計算書（PL）")

# 数値フォーマット関数
def fmt(n):
    if n >= 0:
        return f"{n:,.0f}"
    else:
        return f"△{abs(n):,.0f}"

# 結果をDataFrameで表示
pl_data = {
    "項目": [
        "総売上",
        "事業原価",
        "売上総利益",
        "経費",
        "営業利益",
        "支払利息",
        "経常利益",
        "法人税等（40%）",
        "税引後利益"
    ],
    "金額": [
        fmt(total_revenue),
        fmt(cost),
        fmt(gross_profit),
        fmt(expense),
        fmt(operating_profit),
        fmt(interest),
        fmt(ordinary_profit),
        fmt(tax),
        fmt(net_profit)
    ]
}

pl_df = pd.DataFrame(pl_data)
st.dataframe(pl_df, use_container_width=True, hide_index=True)

# 利益指標をメトリクスで表示
st.subheader("利益指標")
col5, col6, col7 = st.columns(3)

with col5:
    st.metric(
        label="売上総利益",
        value=fmt(gross_profit),
        delta=f"{gross_profit/total_revenue*100:.1f}%" if total_revenue > 0 else "N/A"
    )

with col6:
    st.metric(
        label="営業利益",
        value=fmt(operating_profit),
        delta=f"{operating_profit/total_revenue*100:.1f}%" if total_revenue > 0 else "N/A"
    )

with col7:
    st.metric(
        label="経常利益",
        value=fmt(ordinary_profit),
        delta=f"{ordinary_profit/total_revenue*100:.1f}%" if total_revenue > 0 else "N/A"
    )

# 黒字/赤字判定
st.divider()
if operating_profit > 0:
    st.success(f"✓ 黒字: 営業利益 {fmt(operating_profit)} 円")
else:
    st.error(f"✗ 赤字: 営業利益 {fmt(operating_profit)} 円")

# ===========================================
# 元Excelとの比較（参考）
# ===========================================
with st.expander("元Excel参考値（R2〜R4実績）"):
    ref_data = {
        "年度": ["R2", "R3", "R4"],
        "総売上": ["53,064,612", "136,865,475", "166,438,327"],
        "事業原価": ["49,636,638", "104,757,564", "81,972,549"],
        "営業利益": ["-6,497,026", "1,867,912", "43,401,778"],
        "経常利益": ["-4,398,023", "1,447,912", "42,981,778"]
    }
    ref_df = pd.DataFrame(ref_data)
    st.dataframe(ref_df, use_container_width=True, hide_index=True)
    st.caption("※ 元ExcelのPLシートより抜粋")

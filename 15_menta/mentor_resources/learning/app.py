# Streamlit app - PL Calculator
# Run with: streamlit run app.py

import streamlit as st

# Page title
st.title("PL Calculator")
st.write("Simple Profit & Loss Calculator")

# Input section
st.header("Input")

uriage = st.number_input("Revenue (uriage)", value=50000000, step=1000000)
genka = st.number_input("Cost (genka)", value=30000000, step=1000000)

# Calculate
rieki = uriage - genka

# Output section
st.header("Result")

st.metric(label="Profit (rieki)", value=f"{rieki:,.0f}")

# Show status
if rieki > 0:
    st.success("POSITIVE")
else:
    st.error("NEGATIVE")

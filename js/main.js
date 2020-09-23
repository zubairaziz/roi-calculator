const updateRepairOrders = (el, val) => {
  el.innerHTML = `${val}`
  return
}

const updateClosingRatio = (el, val) => {
  el.innerHTML = `${val}%`
  return
}

const updateResaleOfMagnets = (el, val) => {
  el.innerHTML = `$${val}`
  return
}

const updateOutput = (DailyRepairOrdersValue, ClosingRatioValue, ResaleOfMagnetsValue) => {
  const AdditionalMonthlyProfit = document.getElementById('AdditionalMonthlyProfit')
  const AdditionalAnnualProfit = document.getElementById('AdditionalAnnualProfit')
  const profitPerMagnet = ResaleOfMagnetsValue - 4.00
  const totalShopSales = Math.round(DailyRepairOrdersValue * (ClosingRatioValue / 100))
  const dailyProfit = profitPerMagnet * totalShopSales
  AdditionalMonthlyProfit.innerHTML = `$${Number((Math.round((dailyProfit * 25) * 100) / 100).toFixed(2)).toLocaleString()}`
  AdditionalAnnualProfit.innerHTML = `$${Number((Math.round((dailyProfit * 25 * 12) * 100) / 100).toFixed(2)).toLocaleString()}`
  return
}

const updateRevenueOutput = (DailyRepairOrdersValue, ClosingRatioValue, ResaleOfMagnetsValue) => {
  const AdditionalMonthlyCost = document.getElementById('AdditionalMonthlyCost')
  const AdditionalMonthlyRevenue = document.getElementById('AdditionalMonthlyRevenue')
  const AdditionalAnnualRevenue = document.getElementById('AdditionalAnnualRevenue')
  const totalShopSales = Math.round(DailyRepairOrdersValue * (ClosingRatioValue / 100))
  const dailyCost = totalShopSales * 4.00
  const dailyRevenue = ResaleOfMagnetsValue * totalShopSales
  AdditionalMonthlyCost.innerHTML = `$${Number((Math.round((dailyCost * 25) * 100) / 100).toFixed(2)).toLocaleString()}`
  AdditionalMonthlyRevenue.innerHTML = `$${Number((Math.round((dailyRevenue * 25) * 100) / 100).toFixed(2)).toLocaleString()}`
  AdditionalAnnualRevenue.innerHTML = `$${Number((Math.round((dailyRevenue * 25 * 12) * 100) / 100).toFixed(2)).toLocaleString()}`
  return
}

;
(function () {
  const DailyRepairOrders = document.getElementById('DailyRepairOrders')
  const ClosingRatio = document.getElementById('ClosingRatio')
  const ResaleOfMagnets = document.getElementById('ResaleOfMagnets')

  const DailyRepairOrdersOutput = document.getElementById('DailyRepairOrdersOutput')
  const ClosingRatioOutput = document.getElementById('ClosingRatioOutput')
  const ResaleOfMagnetsOutput = document.getElementById('ResaleOfMagnetsOutput')

  let DailyRepairOrdersValue = DailyRepairOrders.value
  let ClosingRatioValue = ClosingRatio.value
  let ResaleOfMagnetsValue = ResaleOfMagnets.value

  updateOutput(
    DailyRepairOrdersValue,
    ClosingRatioValue,
    ResaleOfMagnetsValue
  )
  updateRepairOrders(DailyRepairOrdersOutput, DailyRepairOrdersValue)
  updateClosingRatio(ClosingRatioOutput, ClosingRatioValue)
  updateResaleOfMagnets(ResaleOfMagnetsOutput, ResaleOfMagnetsValue)

  DailyRepairOrders.addEventListener('input', () => {
    DailyRepairOrdersValue = DailyRepairOrders.value
    updateRepairOrders(DailyRepairOrdersOutput, DailyRepairOrdersValue)
    updateOutput(DailyRepairOrdersValue, ClosingRatioValue, ResaleOfMagnetsValue)
  })
  ClosingRatio.addEventListener('input', () => {
    ClosingRatioValue = ClosingRatio.value
    updateClosingRatio(ClosingRatioOutput, ClosingRatioValue)
    updateOutput(DailyRepairOrdersValue, ClosingRatioValue, ResaleOfMagnetsValue)
  })
  ResaleOfMagnets.addEventListener('input', () => {
    ResaleOfMagnetsValue = ResaleOfMagnets.value
    updateResaleOfMagnets(ResaleOfMagnetsOutput, ResaleOfMagnetsValue)
    updateOutput(DailyRepairOrdersValue, ClosingRatioValue, ResaleOfMagnetsValue)
  })

  const RevenueDailyRepairOrders = document.getElementById('RevenueDailyRepairOrders')
  const RevenueClosingRatio = document.getElementById('RevenueClosingRatio')
  const RevenueResaleOfMagnets = document.getElementById('RevenueResaleOfMagnets')

  const RevenueDailyRepairOrdersOutput = document.getElementById('RevenueDailyRepairOrdersOutput')
  const RevenueClosingRatioOutput = document.getElementById('RevenueClosingRatioOutput')
  const RevenueResaleOfMagnetsOutput = document.getElementById('RevenueResaleOfMagnetsOutput')

  let RevenueDailyRepairOrdersValue = DailyRepairOrders.value
  let RevenueClosingRatioValue = ClosingRatio.value
  let RevenueResaleOfMagnetsValue = ResaleOfMagnets.value

  updateRevenueOutput(
    RevenueDailyRepairOrdersValue,
    RevenueClosingRatioValue,
    RevenueResaleOfMagnetsValue
  )
  updateRepairOrders(RevenueDailyRepairOrdersOutput, RevenueDailyRepairOrdersValue)
  updateClosingRatio(RevenueClosingRatioOutput, RevenueClosingRatioValue)
  updateResaleOfMagnets(RevenueResaleOfMagnetsOutput, RevenueResaleOfMagnetsValue)

  RevenueDailyRepairOrders.addEventListener('input', () => {
    RevenueDailyRepairOrdersValue = RevenueDailyRepairOrders.value
    updateRepairOrders(RevenueDailyRepairOrdersOutput, RevenueDailyRepairOrdersValue)
    updateRevenueOutput(RevenueDailyRepairOrdersValue, RevenueClosingRatioValue, RevenueResaleOfMagnetsValue)
  })
  RevenueClosingRatio.addEventListener('input', () => {
    RevenueClosingRatioValue = RevenueClosingRatio.value
    updateClosingRatio(RevenueClosingRatioOutput, RevenueClosingRatioValue)
    updateRevenueOutput(DailyRepairOrdersValue, RevenueClosingRatioValue, ResaleOfMagnetsValue)
  })
  RevenueResaleOfMagnets.addEventListener('input', () => {
    RevenueResaleOfMagnetsValue = RevenueResaleOfMagnets.value
    updateResaleOfMagnets(RevenueResaleOfMagnetsOutput, RevenueResaleOfMagnetsValue)
    updateRevenueOutput(RevenueDailyRepairOrdersValue, RevenueClosingRatioValue, RevenueResaleOfMagnetsValue)
  })
})()

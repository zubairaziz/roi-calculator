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

;
(function () {
  const resetButton = document.querySelector('input[type="reset"]')
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

  resetButton.addEventListener('click', () => {
    DailyRepairOrdersValue = 50
    ClosingRatioValue = 65
    ResaleOfMagnetsValue = 19.95

    updateOutput(
      DailyRepairOrdersValue,
      ClosingRatioValue,
      ResaleOfMagnetsValue
    )
    updateRepairOrders(DailyRepairOrdersOutput, DailyRepairOrdersValue)
    updateClosingRatio(ClosingRatioOutput, ClosingRatioValue)
    updateResaleOfMagnets(ResaleOfMagnetsOutput, ResaleOfMagnetsValue)
  })

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
})()

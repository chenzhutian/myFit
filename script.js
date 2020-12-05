(async () => {


    const meals = ["breakfast", "extra1", "lunch", "extra2", "dinner", "extra3"];
    const tableHeads = [
        "name",
        "serving",
        "unit",
        "protein",
        "fat",
        "carb",
        "calorles",
        "calorles est."
    ];



    const getSumDict = (fat = 0) => tableHeads.slice(3, 7).reduce((o, k) => {
        if(k === 'fat') {
            o[k] = fat
        } else {
            o[k] = 0
        }
        return o
    }, {})
    document.querySelector(".content").insertAdjacentHTML(
        "afterbegin",
        data.map((d) => {
            const totalSumForToday = getSumDict(2)
            const goalCalorles = d.goal
            const ratio = d.ratio || [0.35, 0.45, 0.2]
            const goalProtein = goalCalorles * ratio[0] / 4
            const goalCarb = goalCalorles * ratio[1] / 4
            const goalFat = goalCalorles * ratio[2] / 9
            // 4 : 4 : 2
            const goal = {
                protein: goalProtein,
                fat: goalFat,
                carb: goalCarb,
                calorles: goalCalorles
            }

            return `
            <h5>${d.date}</h5>
            <table>
                <tr>${tableHeads
                    .map((th) => `<th class="${th}">${th}</th>`)
                    .join('')}
                </tr>

            ${meals
                    .filter((key) => d[key] && d[key].length)
                    .map((key) => {

                        const sum = getSumDict()

                        return `
                    <tr class="meal" ><td colspan="8">${key}</td></tr>

                    ${d[key].map(({ name, unit }) => {
                            const nutrition = nutritionDataset.find(u => u.name === name);
                            Object.keys(sum).forEach(k => sum[k] += nutrition[k]* unit)
                            Object.keys(totalSumForToday).forEach(k => totalSumForToday[k] += nutrition[k]* unit)

                            return `<tr>
                        <td>${name}</td>
                        <td>${nutrition.serving}</td>
                        <td>${unit}</td>
                        ${Object.keys(sum).map(k => `<td>${(nutrition[k] * unit).toFixed(2)}</td>`).join('')}
                        <td>${((nutrition.protein + nutrition.carb) * 4 + nutrition.fat * 9 ).toFixed(2)}</td>
                      </tr>`;
                        }).join('')}

                    <tr class="meal-sum" >
                        <td colspan="3">Total in this ${key}</td>
                        ${Object.keys(sum).map(k => `<td>${sum[k].toFixed(2)}</td>`).join('')}
                        <td>${((sum.protein + sum.carb) * 4 + sum.fat * 9 ).toFixed(2)}</td>
                    </tr> 
                `}).join("")
                }

            <tr class="day-total">
                <td colspan="3">Total today</td>
                ${Object.keys(goal).map(k => `<td>${totalSumForToday[k].toFixed(2)}</td>`).join('')}
                <td>${((totalSumForToday.protein + totalSumForToday.carb) * 4 + totalSumForToday.fat * 9 ).toFixed(2)}</td>
            </tr>
            <tr class="day-goal">
                <td colspan="3">Goal</td>
                ${Object.keys(goal).map(k => `<td>${goal[k].toFixed(2)}</td>`).join('')}
            </tr>
            <tr class="day-rest">
                <td colspan="3">Remaining</td>
                ${Object.keys(goal).map(k => `<td>${(goal[k] - totalSumForToday[k]).toFixed(2)}</td>`).join('')}
                <td>${(goal.calorles - (totalSumForToday.protein + totalSumForToday.carb) * 4 - totalSumForToday.fat * 9 ).toFixed(2)}</td>
            </tr>
            </table>
        `}).join('')
    );
})();
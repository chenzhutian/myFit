import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useStyles, theme } from './style'

import {
  Typography,
  CssBaseline,
  Paper, Collapse,
  AppBar, Toolbar, IconButton, Button,
  ThemeProvider, Input,
  Table, Select, MenuItem, TextField,
  TableContainer, TableHead, TableBody, TableCell, TableRow
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  DeleteForeverSharp as DeleteIcon,
  AddBoxSharp as AddIcon
} from '@material-ui/icons'

type item = { name: string, unit: number }

interface NutritionItem {
  name: string,
  serving: string
  protein: number
  carb: number
  fat: number
  calorles: number
}

interface DailyRecord {
  date: string,
  ratio: number[],
  goal: number,
  breakfast: item[],
  extra1: item[],
  lunch: item[],
  extra2: item[],
  dinner: item[],
  extra3: item[],
  nutritionDataset: NutritionItem[]
}

const meals = ["breakfast", "extra1", "lunch", "extra2", "dinner", "extra3"] as const;
interface RowProps extends DailyRecord {

  //
  onChangeItemUnit: (meal: typeof meals[number], itemIdx: number, value: number) => void
}

const tableHeads = [
  // "name",
  "serving",
  "unit",
  "protein",
  "fat",
  "carb",
  "calorles",
  "cal. est."
];

const getSumDict = (fat = 0) => tableHeads.slice(2, 6).reduce((o, k) => {
  if (k === 'fat') {
    o[k] = fat
  } else {
    o[k] = 0
  }
  return o
}, {} as { protein: number, fat: number, carb: number, calorles: number })


function DailyTable(props: RowProps) {
  const classes = useStyles();
  const { nutritionDataset } = props

  const [open, setOpen] = React.useState(false);

  const totalSumForToday = getSumDict(2)
  const goalCalorles = props.goal
  const ratio = props.ratio || [0.35, 0.45, 0.2]
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

  const detailTable = <TableRow className={classes.detailedTable}>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Table size="small" aria-label="table dense">
          <TableBody>
            {meals.filter(meal => props[meal] && props[meal].length)
              .map(meal => {
                const sum = getSumDict()
                const details = props[meal].map(({ name, unit }: item, itemIdx) => {
                  const nutrition = nutritionDataset.find(u => u.name === name);
                  Object.keys(sum).forEach(k => sum[k] += nutrition[k] * unit)
                  Object.keys(totalSumForToday).forEach(k => totalSumForToday[k] += nutrition[k] * unit)

                  return <TableRow key={`${props.date}_meal_${meal}_${name}`} className={classes.recordRow}>
                    <TableCell width={90}>
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" color="error" />
                      </IconButton>
                    </TableCell>
                    <TableCell width={295}>
                      <Select
                        value={name}
                        displayEmpty
                      >
                        {nutritionDataset.map(nd => <MenuItem value={nd.name}>{nd.name}</MenuItem>)}
                      </Select>
                    </TableCell>

                    <TableCell width={120}>{nutrition.serving}</TableCell>
                    <TableCell width={70}>
                      <Input className={classes.unitInput}
                        id="standard-number"
                        type="number"
                        value={unit}
                        onChange={e => props.onChangeItemUnit(meal, itemIdx, +e.target.value)}
                      />
                    </TableCell>
                    {Object.keys(sum).map(key => <TableCell key={`${props.date}_${meal}_${key}`}>{(nutrition[key] * unit).toFixed(2)}</TableCell>)}
                    <TableCell>{((nutrition.protein + nutrition.carb) * 4 + nutrition.fat * 9).toFixed(2)} </TableCell>
                  </TableRow>
                })

                return <React.Fragment key={meal}>

                  <TableRow key={`${props.date}_total_${meal}`} className={classes.totalRow}>
                    <TableCell width={90}>
                      <IconButton aria-label="delete" size="small">
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                    <TableCell colSpan={3}>Total in {meal}</TableCell>
                    {Object.keys(sum).map(key => <TableCell key={`${props.date}_total_${key}`}>{sum[key].toFixed(2)}</TableCell>)}
                    <TableCell>{((sum.protein + sum.carb) * 4 + sum.fat * 9).toFixed(2)} </TableCell>
                  </TableRow>
                  {details}

                </React.Fragment>
              })
            }
          </TableBody>
        </Table>
      </Collapse>
    </TableCell>
  </TableRow>

  return (
    <>
      <TableRow className={classes.summaryRow}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Table size="small" aria-label="table dense">
            <TableHead>
              <TableRow>
                <TableCell width={90}>
                  <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" width={295}> {props.date} </TableCell>
                {tableHeads.map(t => <TableCell align="left" width={t === 'serving' ? 120 : t === 'unit' ? 70 : 90} key={`${props.date}_head_${t}`}>{`${t[0].toUpperCase()}${t.slice(1)}`}</TableCell>)}
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell width={90}></TableCell>
                <TableCell colSpan={3}>Total Today</TableCell>
                {Object.keys(goal).map(k => <TableCell key={`${props.date}_total_${k}`}>{totalSumForToday[k].toFixed(2)}</TableCell>)}
                <TableCell>{((totalSumForToday.protein + totalSumForToday.carb) * 4 + totalSumForToday.fat * 9).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>

            <TableBody>
              <TableRow>
                <TableCell width={90}></TableCell>
                <TableCell colSpan={3}>Goal Today</TableCell>
                {Object.keys(goal).map(k => <TableCell key={`${props.date}_goal_${k}`}>{goal[k].toFixed(2)}</TableCell>)}
              </TableRow>
            </TableBody>

            <TableBody>
              <TableRow>
                <TableCell width={90}></TableCell>
                <TableCell colSpan={3}>Remaining Today</TableCell>
                {Object.keys(goal).map(k => <TableCell key={`${props.date}_remaining_${k}`}>{(goal[k] - totalSumForToday[k]).toFixed(2)}</TableCell>)}
                <TableCell>{(goal.calorles - (totalSumForToday.protein + totalSumForToday.carb) * 4 - totalSumForToday.fat * 9).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableCell>
      </TableRow>

      {detailTable}
    </>
  );
}

export default function App() {
  const classes = useStyles();
  const [data, setData] = useState<DailyRecord[]>([])
  const [nutritionDataset, setNutritionDataset] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const nutritionDataset = await fetch("/assets/unit.json").then((res) =>
        res.json()
      );
      setNutritionDataset(nutritionDataset)
      const data = await fetch("/assets/data.json").then((res) => res.json());
      setData(data)
    }
    fetchData()
  }, [])

  return <ThemeProvider theme={theme}> <div className={classes.root}>
    <CssBaseline />

    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

    <TableContainer >
      <Table className={classes.table} size="small" aria-label="table dense">

        <TableBody>
          {data.map(d => <DailyTable
            key={d.date}
            {...d}
            nutritionDataset={nutritionDataset}
            onChangeItemUnit={(meal, itemIdx, newVal) => {
              d[meal][itemIdx].unit = newVal
              setData([...data])
            }}
          />)}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  </ThemeProvider>
}

ReactDOM.render(<App />, document.getElementById("root"));

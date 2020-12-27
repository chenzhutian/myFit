import { FoodName } from './unit'

export interface FoodItem {
    name: FoodName, unit: number
}

export interface DataPerDay {
    date: string
    goal: number
    ratio?: [number, number, number]
    breakfast?: FoodItem[]
    extra1?: FoodItem[]
    lunch?: FoodItem[]
    extra2?: FoodItem[]
    dinner?: FoodItem[]
    extra3?: FoodItem[]
}

export const data: DataPerDay[] = [
  {
    date: "2020-11-12",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
    ],
    extra1: [
      {
        name: "Beef UnCured Franks",
        unit: 1,
      },
    ],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Pompeian Extra Virgin Olive Oil", unit: 0.5 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini White Rice", unit: 1 },
    ],
  },
  {
    date: "2020-11-13",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
    ],
    extra1: [
      { name: "Artesano Bakery Bread", unit: 2 },
      { name: "Hillshire Fram Roast Beef", unit: 0.85 },
    ],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.45 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini White Rice", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 1 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini Basmati Rice", unit: 1 },
      { name: "365 Organic Shelled Edamame", unit: 1 },
    ],
    extra3: [{ name: "Impact Whey Protein", unit: 1 }],
  },
  {
    date: "2020-11-14",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
    ],
    extra1: [{ name: "Thai-style curry chicken with jasmine rice", unit: 0.5 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Thai-style curry chicken with jasmine rice", unit: 0.5 },
    ],
    extra2: [
      { name: "Artesano Bakery Bread", unit: 2 },
      { name: "Hillshire Fram Roast Beef", unit: 0.785 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1 },
      { name: "Egg", unit: 0.5 },
      { name: "Egg White", unit: 1.5 },
      { name: "Mini Basmati Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-15",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [
      { name: "Fired fish", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-16",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.38 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Basmati Rice", unit: 1 },
    ],
    extra2: [
      { name: "Whole white mushrooms", unit: 1.14 },
      { name: "Spinach", unit: 0.82 },
      { name: "Egg", unit: 2 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "Mini Basmati Rice", unit: 1 },
      { name: "Tomato", unit: 1.74 },
    ],
    extra3: [{ name: "Artesano Bakery Bread", unit: 1 }],
  },
  {
    date: "2020-11-17",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.46 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1 },
      { name: "Beef Tri-tip Steak", unit: 1.16 },
      { name: "Pompeian Extra Virgin Olive Oil", unit: 0.25 },
      { name: "Mini White&Brown Rice", unit: 1 },
    ],
    extra2: [
      { name: "Whole white mushrooms", unit: 1.14 },
      { name: "Spinach", unit: 0.82 },
      { name: "Egg", unit: 1 },
    ],
    dinner: [
      { name: "Impact Whey Protein", unit: 1 },
      { name: "Brocolli", unit: 1 },
      { name: "Beef Tri-tip Steak", unit: 1 },
      { name: "Pompeian Extra Virgin Olive Oil", unit: 0.25 },
      { name: "Mini White&Brown Rice", unit: 1 },
    ],
    extra3: [
      { name: "Artesano Bakery Bread", unit: 2 },
      { name: "Uncured Honey Ham", unit: 1 },
    ],
  },
  {
    date: "2020-11-18",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.65 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.06 },
    ],
    extra2: [
      { name: "Artesano Bakery Bread", unit: 2 },
      { name: "Uncured Honey Ham", unit: 1 },
    ],
    dinner: [
      { name: "Impact Whey Protein", unit: 1 },
      { name: "Brocolli", unit: 1 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [{ name: "Kiwifruit Green Raw", unit: 0.74 }],
  },
  {
    date: "2020-11-19",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [
      { name: "Harvest Honey Wheat", unit: 1 },
      { name: "Roast Beef", unit: 1 },
    ],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 2.1 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.05 },
    ],
    extra2: [{ name: "365 Orange Peach Mango Juice", unit: 0.5 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-20",
    goal: 2100,
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.77 },
      { name: "Garlic", unit: 0.03 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 1 },
      { name: "Uncured Honey Ham", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.77 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-21",
    goal: 1900,
    ratio: [0.38, 0.42, 0.2],
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 0.91 },
      { name: "Beef Tri-tip Steak", unit: 1.18 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 1 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 0.91 },
      { name: "Beef Tri-tip Steak", unit: 1.18 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-22",
    goal: 1900,
    ratio: [0.38, 0.42, 0.2],
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [
      { name: "Fired fish", unit: 1 },
      { name: "Kraft Tartar Sauce", unit: 0.25 },
    ],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 1 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-23",
    goal: 1900,
    ratio: [0.38, 0.42, 0.2],
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Protein Banana Nut", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Asparagus", unit: 2.3 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Tomato", unit: 2.625 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 1 }],
    dinner: [
      { name: "Asparagus", unit: 2.3 },
      { name: "Chicken Breast", unit: 1.56 },
      { name: "Egg White", unit: 2 },
      { name: "Tomato", unit: 2.625 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-24",
    goal: 1800,
    ratio: [0.38, 0.42, 0.2],
    breakfast: [
      { name: "Reduced Fat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Kiwifruit Green Raw", unit: 0.74 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [
      { name: "Impact Whey Protein", unit: 1 },
      { name: "Harvest Honey Wheat", unit: 1 },
      { name: "Roast Beef", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg", unit: 0.5 },
      { name: "Egg White", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-25",
    goal: 1800,
    ratio: [0.38, 0.42, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "365 Plain Whole Milk Yogurt", unit: 0.33 },
      { name: "Protein One", unit: 1 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.7 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [
      { name: "Kiwifruit Green Raw", unit: 0.74 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.7 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [{ name: "Fatfree Milk", unit: 0.5 }],
  },
  {
    date: "2020-11-26",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Protein One", unit: 1 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg White", unit: 2 },
      { name: "Mini White Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [
      { name: "Roast Beef", unit: 1 },
      { name: "Kiwifruit Green Raw", unit: 0.74 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg", unit: 1.5 },
      { name: "Egg White", unit: 0.5 },
      { name: "Mini White Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-27",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "Jazz Apple", unit: 0.9 },
      { name: "Protein One", unit: 1 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.55 },
      { name: "Chicken Breast", unit: 1.7 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.55 },
      { name: "Chicken Breast", unit: 1.7 },
      { name: "Egg", unit: 1.5 },
      { name: "Egg White", unit: 0.5 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra3: [],
  },
  {
    date: "2020-11-28",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Protein One", unit: 1 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.65 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "365 Organic Linguine", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 1 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.65 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [{ name: "Kiwifruit Green Raw", unit: 0.74 }],
  },
  {
    date: "2020-11-29",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Protein One", unit: 1 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg White", unit: 2 },
      { name: "365 Organic Linguine", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [
      { name: "Fired fish", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.55 },
      { name: "Egg", unit: 0.5 },
      { name: "Egg White", unit: 1.5 },
      { name: "365 Organic Linguine", unit: 0.5 },
    ],
    extra3: [{ name: "Fatfree Milk", unit: 0.75 }],
  },
  {
    date: "2020-11-30",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.7 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "Egg White", unit: 2 },
      { name: "Mini White Rice", unit: 1 },
    ],
    extra2: [
      { name: "Protein One", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.7 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "Egg", unit: 1.5 },
      { name: "Egg White", unit: 0.5 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [{ name: "Fatfree Milk", unit: 0.75 }],
  },
  {
    date: "2020-12-01",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.7 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "Egg White", unit: 2 },
      { name: "365 Organic Linguine", unit: 1 },
      { name: "Din-tai fung red oil", unit: 1 },
    ],
    extra2: [
      { name: "Protein One", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.7 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "Egg", unit: 1.5 },
      { name: "Egg White", unit: 0.5 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [{ name: "Fatfree Milk", unit: 0.5 }],
  },
  {
    date: "2020-12-02",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Spinach", unit: 1.45 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Mini White Rice", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 0.5 },
      { name: "Smoked Turkey Breast", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg", unit: 0.5 },
      { name: "Egg White", unit: 1.5 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-03",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 0.5 },
      { name: "Smoked Turkey Breast", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg", unit: 1 },
      { name: "Egg White", unit: 1 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-04",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Allacaie Tuna in water", unit: 0.5 },
      { name: "365 Organic Linguine", unit: 1 },
      { name: "Garlic", unit: 0.04 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 0.5 },
      { name: "Roast Beef", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Allacaie Tuna in water", unit: 0.5 },
      { name: "Egg", unit: 2 },
      { name: "365 Organic Linguine", unit: 1 },
      { name: "Garlic", unit: 0.04 },
    ],
    extra3: [{ name: "Roast Beef", unit: 0.5 }],
  },
  {
    date: "2020-12-05",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.9 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 2 }],
    dinner: [
      { name: "Brocolli", unit: 1.9 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-06",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Fatfree Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini White Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 2 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.03 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-07",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
      { name: "Garlic", unit: 0.01 },
    ],
    extra2: [
      { name: "Impact Whey Protein", unit: 1 },
      { name: "Harvest Honey Wheat", unit: 0.5 },
      { name: "Smoked Turkey Breast", unit: 1.33 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini White Rice", unit: 1 },
      { name: "Garlic", unit: 0.01 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-08",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
    ],
    extra1: [{ name: "Fired fish", unit: 0.5 }],
    lunch: [
      { name: "Brocolli", unit: 1.56 },
      { name: "Egg White", unit: 2 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra2: [
      { name: "Fired fish", unit: 0.5 },
      { name: "Uncured Ham", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.56 },
      { name: "Egg White", unit: 2 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-09",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [
      { name: "Brocolli", unit: 1.56 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 0.5 },
      { name: "Uncured Ham", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.56 },
      { name: "Egg White", unit: 2 },
      { name: "Chicken Breast", unit: 1.6 },
      { name: "365 Organic Linguine", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-10",
    goal: 1800,
    ratio: [0.4, 0.4, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [
      { name: "Uncured Ham", unit: 1 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini White Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-11",
    goal: 1750,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.4 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Egg", unit: 1 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini Brown Rice", unit: 1 },
    ],
    extra2: [
      { name: "Roast Beef", unit: 1 },
      { name: "Impact Whey Protein", unit: 1.5 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Mini White Rice", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-12",
    goal: 1750,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "365 Oganic Whole Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.4 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.58 },
      { name: "Chicken Breast", unit: 1.57 },
      { name: "Egg White", unit: 2 },
      { name: "Mini White Rice", unit: 1 },
    ],
    extra2: [
      { name: "Uncured Ham", unit: 1 },
      { name: "Harvest Honey Wheat", unit: 0.25 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.58 },
      { name: "Chicken Breast", unit: 1.57 },
      { name: "Egg White", unit: 2 },
      { name: "Dececcd Linguine no.7", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-13",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.4 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.58 },
      { name: "Chicken Breast", unit: 1.57 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Dececcd Linguine no.7", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 0.25 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Din-tai fung red oil", unit: 1 },
      { name: "Brocolli", unit: 1.58 },
      { name: "Chicken Breast", unit: 1.57 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Dececcd Linguine no.7", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-14",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.4 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.67 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Dececcd Linguine no.7", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 0.25 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Din-tai fung red oil", unit: 1 },
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.67 },
      { name: "Egg White", unit: 2 },
      { name: "Dececcd Linguine no.7", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-15",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.3 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Top Sirloin Steak", unit: 1.5 },
      { name: "Barilla Whole Grain Spaghetti", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 2 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.67 },
      { name: "Egg White", unit: 2 },
      { name: "Dececcd Linguine no.7", unit: 1 },
    ],
    extra3: [],
  },
  {
    date: "2020-12-16",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Barilla Whole Grain Spaghetti", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 2 }],
    dinner: [
      { name: "Brocolli", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Top Sirloin Steak", unit: 1.5 },
      { name: "Barilla Whole Grain Spaghetti", unit: 1 },
    ],
    extra3: [
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.25 },
      { name: "Blueberry", unit: 0.3 },
    ],
  },
  {
    date: "2020-12-17",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Egg", unit: 2 },
      { name: "Whole white mushrooms", unit: 2.4 },
      { name: "Spinach", unit: 2.25 },
      { name: "Green Chile Peppers", unit: 0.53 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Mini Basmati Rice", unit: 1 },
    ],
    extra2: [
      { name: "Harvest Honey Wheat", unit: 1 },
      { name: "Roast Beef", unit: 0.5 },
      { name: "Impact Whey Protein", unit: 1 },
    ],
    dinner: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 2 },
      { name: "Barilla Whole Grain Spaghetti", unit: 1 },
    ],
    extra3: [{ name: "Lowfat Milk", unit: 0.5 }],
  },
  {
    date: "2020-12-18",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Lowfat Milk", unit: 1 },
      { name: "Quaker Oats", unit: 1 },
      { name: "O Organics Greek Plain Nonfat Yogurt", unit: 0.05 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [{ name: "Protein One", unit: 1 }],
    lunch: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Barilla Whole Grain Spaghetti", unit: 1 },
    ],
    extra2: [{ name: "Impact Whey Protein", unit: 1 }],
    dinner: [
      { name: "Brocolli", unit: 1.6 },
      { name: "Chicken Breast", unit: 1.5 },
      { name: "Egg White", unit: 1 },
      { name: "Egg", unit: 1 },
      { name: "Barilla Whole Grain Spaghetti", unit: 1 },
    ],
    extra3: [
      { name: "Lowfat Milk", unit: 0.5 },
      { name: "Impact Whey Protein", unit: 0.5 },
    ],
  },
  {
    date: "2020-12-22",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "Quaker Oats", unit: 1 },
      { name: "Dairy Almond Vanilla Milk", unit: 1 },
      { name: "Stonyfield organic lowfact vanilla Yogurt", unit: 0.44 },
    ],
    extra1: [],
    lunch: [{ name: "Beef Strip Steak Butcher shop beef Lion", unit: 1.5 }],
    extra2: [],
    dinner: [],
    extra3: [{ name: "Impact Whey Protein", unit: 1 }],
  },
  {
    date: "2020-12-27",
    goal: 1800,
    ratio: [0.41, 0.39, 0.2],
    breakfast: [
      { name: "365 Lowfat Milk", unit: 1 },
      { name: "Fage 0% Yogurt", unit: 0.33 },
      { name: "Quaker Oats", unit: 1 },
      { name: "Blueberry", unit: 0.5 },
    ],
    extra1: [],
    lunch: [],
    extra2: [],
    dinner: [],
    extra3: [],
  },
];
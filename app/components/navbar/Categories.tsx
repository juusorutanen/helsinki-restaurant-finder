"use client";
import styles from "../../../styles/components/Categories.module.scss";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {
  GiTacos,
  GiNoodles,
  GiSteak,
  GiDonerKebab,
  GiSandwich,
} from "react-icons/gi";
import { LuVegan, LuSalad } from "react-icons/lu";
import { useSearchParams, usePathname } from "next/navigation";

export const categories = [
  {
    label: "Pizza",
    icon: FaPizzaSlice,
  },
  {
    label: "Burger",
    icon: FaHamburger,
  },
  {
    label: "Mexican",
    icon: GiTacos,
  },
  {
    label: "Asian",
    icon: GiNoodles,
  },
  {
    label: "Steak",
    icon: GiSteak,
  },
  {
    label: "Kebab",
    icon: GiDonerKebab,
  },
  {
    label: "Sandwich",
    icon: GiSandwich,
  },
  {
    label: "Vegan",
    icon: LuVegan,
  },
  {
    label: "Vegetarian",
    icon: LuSalad,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <Container>
      <div className={styles.flexContainer}>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

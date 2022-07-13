"use strict";
import { imgLoading } from "./index.js";

const element = document.getElementById("img-wrapper");
const btn = document.getElementById("load-img-btn");

const imgURL =
  "https://encrypted-ttatic.com/images?q=tbn:ANd9GcQgMqFgaGVGRBv0XVpDNPo_3mCruXsEbXwSag&usqp=CAU";

btn.addEventListener("click", () => imgLoading(imgURL, element, 4));

"use client";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Test() {
  return (
    <div class="flex flex-row">
      <div class="basis-4/5">01</div>
      <div class="basis-1/5">02</div>
      {/* <div class="basis-1/2">03</div> */}
    </div>
  );
}

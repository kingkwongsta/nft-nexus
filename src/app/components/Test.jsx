"use client";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Test() {
  return <h2>HELLO</h2>;
}

export const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
);

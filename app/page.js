import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { redirect } from "next/navigation";
export default function Home() {
  return redirect("/home");
}

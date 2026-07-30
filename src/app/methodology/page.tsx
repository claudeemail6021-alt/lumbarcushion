import { redirect } from "next/navigation";

// Methodology page removed — our research approach is described on the About page.
export default function MethodologyPage() {
  redirect("/about");
}


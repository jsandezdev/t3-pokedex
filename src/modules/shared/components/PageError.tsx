import { TriangleAlert } from "lucide-react";
import { Container } from "./Container";

export const PageError = () => {
  return (
    <Container className="flex justify-center">
      <p className="mt-4 flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-red-400">
        <TriangleAlert className="size-4" />
        <span>An error occurred</span>
      </p>
    </Container>
  );
};

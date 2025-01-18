import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

export function ErrorMessage({children}) {
  const navigate = useNavigate();
  return (
    <div>
      <p>{children}</p>
      <Button onClick={() => navigate("/")}>Return back to home</Button>
    </div>
  );
}
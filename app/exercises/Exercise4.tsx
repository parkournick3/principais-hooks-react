import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export default function Exercise4() {
  // Descomente: const [count, increment] = useCount(0)

  return (
    <div className="flex flex-col gap-4 items-start mx-2">
      <Alert>
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>Regra</AlertTitle>
        <AlertDescription>
          <ul className="list-disc">
            <li>faça o contador no arquivo (hooks &gt; useCount.ts)</li>
            <li>
              deve ser usado da seguinte forma: const [count, increment] =
              useCount(0)
            </li>
          </ul>
        </AlertDescription>
      </Alert>
      <div className="flex gap-4 items-center">
        <Button>
          Este botão deve incrementar o número ao lado a cada clique
          {" ->"}
        </Button>
        <span className="font-bold text-xl">0</span>
      </div>
    </div>
  );
}

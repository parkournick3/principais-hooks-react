import { Button } from "@/components/ui/button";

export default function Exercise1() {
  // Edite a partir daqui!

  // Edite até aqui!

  return (
    <div className="flex gap-4 items-center mx-2">
      <Button
        onClick={() => {
          // Edite aqui
        }}
      >
        Este botão deve incrementar o número ao lado a cada clique
        {" ->"}
      </Button>
      <span className="font-bold text-xl">0</span>
    </div>
  );
}

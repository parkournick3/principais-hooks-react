"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Exercise2() {
  const [pageTitle, setPageTitle] = useState(() => document.title);

  // Edite a partir daqui!

  // Edite somente até aqui!

  return (
    <div className="flex gap-4 items-center mx-2">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="page-title">Titulo da página</Label>
        <Input
          value={pageTitle}
          onChange={(event) => {
            setPageTitle(event.target.value);
          }}
          type="text"
          id="page-title"
        />
      </div>
    </div>
  );
}

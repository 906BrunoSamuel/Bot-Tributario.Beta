
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const data = [
  {
    section: "🔫 Armas e Itens de Segurança",
    color: "bg-red-500",
    icon: "🔫",
    items: [
      { name: "Armas e munições", rate: 25 },
      { name: "Brinquedos que imitam armas", rate: 25 },
      { name: "Cigarros, charutos e fumos", rate: 25 },
      { name: "Cigarreiras", rate: 25 },
    ],
  },
  {
    section: "🍻 Bebidas e Alimentação",
    color: "bg-orange-400",
    icon: "🍻",
    items: [
      { name: "Bebidas (exceto isentas)", rate: 25 },
      { name: "Refrigerante", rate: 18 },
      { name: "Cerveja", rate: 25 },
      { name: "Refeições prontas", rate: 12 },
      { name: "Arroz", rate: 12 },
      { name: "Feijão", rate: 12 },
      { name: "Leite", rate: 12 },
      { name: "Massas", rate: 12 },
      { name: "Ovos", rate: 12 },
      { name: "Pescado comum", rate: 12 },
      { name: "Frutas, verduras e hortaliças", rate: 12 },
    ],
  },
  {
    section: "📦 Alíquota Padrão (17%)",
    color: "bg-gray-500",
    icon: "📦",
    items: [
      { name: "Eletrodomésticos", rate: 17 },
      { name: "Roupas", rate: 17 },
      { name: "Calçados", rate: 17 },
      { name: "Produtos de limpeza", rate: 17 },
      { name: "Utensílios domésticos", rate: 17 },
      { name: "Brinquedos (exceto armas)", rate: 17 },
      { name: "Produtos de papelaria", rate: 17 },
      { name: "Plásticos e embalagens", rate: 17 },
      { name: "Ferramentas manuais", rate: 17 },
      { name: "Alimentos industrializados não especificados", rate: 17 },
    ],
  }
];

export default function AssistenteFiscal() {
  const [expanded, setExpanded] = useState({});
  const [search, setSearch] = useState("");

  const filteredData = data.map((sec) => ({
    ...sec,
    items: sec.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-2">
        <Search className="text-muted-foreground" />
        <Input
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredData.map((section, idx) => (
        <Card key={idx} className="shadow-md">
          <Button
            className={`w-full text-white justify-between text-lg ${section.color}`}
            onClick={() =>
              setExpanded((prev) => ({
                ...prev,
                [section.section]: !prev[section.section],
              }))
            }
          >
            <span>{section.icon} {section.section}</span>
            {expanded[section.section] ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expanded[section.section] && (
            <CardContent className="bg-white border-t border-gray-200 divide-y">
              {section.items.map((item, i) => (
                <div key={i} className="py-2 px-1 flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-bold">{item.rate}%</span>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}

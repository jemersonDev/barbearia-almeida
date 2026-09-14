import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: ["/", "/agendar"], disallow: ["/agendamentos", "/clientes", "/configuracoes", "/gestao", "/horarios", "/login", "/meu-agendamento", "/novo-agendamento", "/operacao", "/relatorios", "/api/"] }], sitemap: "https://www.barbeariaalmeida.com/sitemap.xml" }; }

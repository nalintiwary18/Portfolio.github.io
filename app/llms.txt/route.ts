import { portfolioText } from "../portfolio";

export const dynamic = "force-static";

export function GET() {
    return new Response(portfolioText(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

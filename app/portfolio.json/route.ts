import { PORTFOLIO_DATA } from "../portfolio";

export const dynamic = "force-static";

export function GET() {
    return Response.json(PORTFOLIO_DATA);
}

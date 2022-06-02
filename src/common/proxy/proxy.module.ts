import { Module } from "@nestjs/common";
import { ClientProxyCSaaS } from "./client-proxy";

@Module({
    providers: [ ClientProxyCSaaS ],
    exports: [ ClientProxyCSaaS ],
})
export class ProxyModule{}
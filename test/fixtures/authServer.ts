import smartAuthProviderExample from "../smart-auth/idp";
import Fastify from "fastify";
import {
  SmartAuth,
  SmartAuthRedirectQuerystring as Querystring,
  SmartAuthRedirectQuerystringSchema as QuerystringAjvSchema,
  SmartAuthNamespace
} from "../../src";

declare module 'fastify' {
  interface FastifyInstance {
    idp: SmartAuthNamespace;
  }
}

export const fastify = Fastify();

fastify.register(SmartAuth, { prefix: '/smart', ...smartAuthProviderExample }) 

fastify.get<Querystring>("/smart/idp/redirect", QuerystringAjvSchema, async function (request, reply) {
  const response = await this.idp.getAccessTokenFromAuthorizationCodeFlow(request)
  reply.send(response.token)
})
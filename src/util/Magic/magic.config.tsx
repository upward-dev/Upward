import { OAuthExtension } from "@magic-ext/oauth";
import {Magic} from "magic-sdk";

const createMagic = (key:string | undefined) => {
    if(key) {
        return (
          typeof window != 'undefined' &&
          new Magic(key,{
            extensions:[new OAuthExtension()]
          })
        );
    }
};
  
export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
  
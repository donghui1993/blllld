import { syntaxParse } from "./syntaxParse";

/* for method */
export default class b__d {
    constructor(syntax) {
        this.syntax = syntax;
        this.resolve()
    }
    resolve(){
       this.resolved = syntaxParse(this.syntax)
    }
}
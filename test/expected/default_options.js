JST["test/fixtures/conditional.twig"]={"options":{"strict_variables":false,"allowInlineIncludes":false},"blocks":{},"child":{"blocks":{}},"extend":null,"tokens":[{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"value","match":["value"]}],"output":[{"type":"raw","value":"  "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"value","match":["value"]}]},{"type":"raw","value":"\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"  No value\n"}]}}]};
JST["test/fixtures/greeting.twig"]={"options":{"strict_variables":false,"allowInlineIncludes":false},"blocks":{},"child":{"blocks":{}},"extend":null,"tokens":[{"type":"raw","value":"Hello, "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"firstName","match":["firstName"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"lastName","match":["lastName"]}]},{"type":"raw","value":"!\n"}]};
JST["test/fixtures/weather.twig"]={"options":{"strict_variables":false,"allowInlineIncludes":false},"blocks":{},"child":{"blocks":{}},"extend":null,"tokens":[{"type":"raw","value":"The weather today is "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"weather","match":["weather"]}]},{"type":"raw","value":".\n"}]}
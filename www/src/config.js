// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7aqn6ptdn999ic3bkc1rvrpneg",     // CognitoClientID
  "api_base_url": "https://isht1h9vvh.execute-api.us-east-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "webapplambda1-webapplambda1.auth.us-east-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://aub2.d10pgzgedb8jwt.amplifyapp.com"                                      // AmplifyURL
};

export default config;

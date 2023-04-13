// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6ed0dcnb88hfgh1hppvdkkfh7t",     // CognitoClientID
  "api_base_url": "https://6lh41vyo4f.execute-api.us-east-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-webapp-demo.auth.us-east-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://aub.d13rmsw2e4l4lf.amplifyapp.com"                                      // AmplifyURL
};

export default config;

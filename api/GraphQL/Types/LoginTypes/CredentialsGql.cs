using service.Models.Command;

namespace api.GraphQL.Types.LoginTypes;

[GraphQLName("Credentials")]
public class CredentialsGql
{
    public string Email { get; set; }
    public string Password { get; set; }
    
    [GraphQLIgnore]
    public LoginCommandModel ToModel() => new() { Email = Email, Password = Password };
}

[UnionType("LoginResult")]
public interface ILoginResultGql {}

[GraphQLName("TokenResponse")]
public class TokenResultGql : ILoginResultGql
{
    public string Token { get; set; }
}

[GraphQLName("Invalid Credentials")]
public class InvalidCredentialsGql : ILoginResultGql
{
    public string Message { get; set; }
}
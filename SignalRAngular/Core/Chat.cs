using Microsoft.AspNet.SignalR;

namespace SignalRAngular.Core
{
    public class Chat : Hub
    {
        public void Send(string message)
        {
            Clients.All.receive(message);
        }
    }
}
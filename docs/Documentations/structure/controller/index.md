# Overview Controller

# ApiController (Base Class)

## Purpose

The `ApiController` is the **foundation** for all other controllers in the Asset Valuer Pro (AVP) system. Think of it like a **template** that ensures all controllers behave consistently. Any API that you interact with in the system is built on top of this controller.

It exists to handle common setup and behavior—like making sure users are logged in before they can access information, managing how big a request can be, and helping forward requests internally using a smart structure called **CQRS** (more on that below).

---

## Business Context

Asset Valuer Pro is designed to be secure, scalable, and easy to maintain. To achieve this, every API request flows through a controller that **inherits shared rules** from `ApiController`. This includes:

- Making sure users are **authorized** (logged in)
- Making sure requests are **routed** consistently
- Sending all requests through a smart handler using **CQRS**

This controller also follows internal documentation and audit strategies to ensure that developers are aligned with best practices across the project.

---

## What Does the ApiController Do?

Imagine a hotel front desk that checks in guests, verifies IDs, and forwards special requests to the right departments. `ApiController` does something similar for every API endpoint in the AVP system.

Here’s what it takes care of:

| Feature | Description |
|--------|-------------|
| **Authorization Required** | Ensures only authenticated users can access APIs |
| **Standard Routing** | All APIs follow a consistent pattern (`/api/controller-name`) |
| **No Upload Limits** | Allows large files or data to be uploaded |
| **CQRS with MediatR** | Separates “asking for data” and “making changes” using a pattern (CQRS) |
| **Message Bus Access** | Supports advanced integrations with other systems through internal messaging (Rebus) |

---

## How Is It Built?

### Attributes (Built-in Behaviors)

| Attribute | What It Means |
|----------|----------------|
| `[Authorize]` | Everyone must be logged in to use any APIs unless explicitly allowed otherwise |
| `[ApiController]` | Enables built-in API behaviors like automatic request validation |
| `[DisableRequestSizeLimit]` | Removes restrictions on how large a request can be |
| `[Route("api/[controller]")]` | Automatically maps the URL path based on the controller’s name |

### Services & Tools Used

| Service | Purpose |
|--------|---------|
| **MediatR (ISender)** | Sends all requests to the right "handler" based on type (Command or Query) |
| **Rebus (IBusRegistry)** | Allows sending messages to other parts of the system asynchronously |
| **Dependency Injection** | Automatically gives the controller access to the tools it needs when it starts working |

---

## Design Principles

- **Thin Controllers**: The controller does not contain business logic. It only accepts the request and passes it to the right handler.
- **Lazy Initialization**: The tools it needs (like MediatR or Rebus) are only loaded when needed, saving resources.
- **Scalable Setup**: Since every controller inherits from this base, improvements made here benefit the whole API system.

---

## Example in Action

Here’s a simplified way to understand how another controller uses `ApiController`:

```csharp
public class AssetController : ApiController
{
    [HttpGet]
    [Route("Get")]
    public async Task<AssetDto> GetAsset([FromQuery] GetAssetQuery query)
    {
        // Forwards the request to the right handler using CQRS via MediatR
        return await Mediator.Send(query);
    }
}

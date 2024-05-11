```mermaid

    sequenceDiagram 
    participant User
    participant Server

    User->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server

    Server -->> User: 201 Created
    Note right of Server: Response: {"message":"note created"}
    deactivate Server


```
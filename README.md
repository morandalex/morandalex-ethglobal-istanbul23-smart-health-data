# ethglobal-istanbul23-smart-health-data

scroll contract : 0xD13DC6A66BD74008167E9c9E39F1301E02983c32

verified on blockscout sepolia scan
https://sepolia-blockscout.scroll.io/address/0xD13DC6A66BD74008167E9c9E39F1301E02983c32#code


smart contract logic : 

```mermaid
flowchart TD

    A[Start] --> B[Contract Deployment]

    B --> C{Is Caller Whitelisted?}
    C -- Yes --> D[addUser]
    C -- No --> E[Reject Access]

    D --> F[New User Added]
    F --> G{Any More Actions?}
    G -- Yes --> H[modifyUserHealthRecord]
    G -- No --> I[End]

    H --> J{Can Modify?}
    J -- No --> K[Reject Modification]
    J -- Yes --> L[Health Record Modified]

    L --> G

    E --> I
    K --> I

```



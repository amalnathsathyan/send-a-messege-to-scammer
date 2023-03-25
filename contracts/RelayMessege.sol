// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RelayMessage {
    function relayMessage(bytes memory message, address signer, bytes memory signature) public {
        bytes32 messageHash = prefixed(keccak256(message));
        require(recoverSigner(messageHash, signature) == signer, "Invalid signature");
        // The message is verified and can be sent to the scammer's address.
    }

    function recoverSigner(bytes32 messageHash, bytes memory sig) internal pure returns (address) {
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(sig);
        return ecrecover(messageHash, v, r, s);
    }

    function splitSignature(bytes memory sig) internal pure returns (uint8 v, bytes32 r, bytes32 s) {
        require(sig.length == 65, "Invalid signature length");
        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }

    function prefixed(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}

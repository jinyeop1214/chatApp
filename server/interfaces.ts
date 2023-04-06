export interface ServerToClientEvents {
	// noArg: () => void;
	// basicEmit: (a: number, b: string, c: Buffer) => void;
	// withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
	// hello: () => void;
	nickname: (name: string, callback: () => void) => void;
}

export interface InterServerEvents {
	// ping: () => void;
}

export interface SocketData {
	name: string;
}

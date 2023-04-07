export interface ServerToClientEvents {
	// noArg: () => void;
	// basicEmit: (a: number, b: string, c: Buffer) => void;
	// withAck: (d: string, callback: (e: number) => void) => void;
	welcome: (nickname: string, count: number) => void;
	room_change: (openRooms: string[]) => void;
	bye: (nickname: string, count: number) => void;
	new_message: (msg: string) => void;
}

export interface ClientToServerEvents {
	// hello: () => void;
	enter_room: (roomname: string, callback: (count: number) => void) => void;
	nickname: (nickname: string, callback: () => void) => void;
	new_message: (msg: string, roomname: string, callback: () => void) => void;
}

export interface InterServerEvents {
	// ping: () => void;
}

export interface SocketData {
	name: string;
}

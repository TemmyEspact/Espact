import { hookstate, useHookstate } from '@hookstate/core';

const globalState = hookstate(false);

export default function useUserDetails() {
    const state = useHookstate(globalState);
    return {
        get: () => state.get(),
        set: (value) => state.set(value),
    };
}

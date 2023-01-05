import {useContext} from 'react';
import {RootStore} from '@store/RootStore';
import {StoreContext} from '@context/StoreContext';

export const useStores = (): RootStore => useContext(StoreContext);

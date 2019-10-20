import { fetchAddressList } from 'api/geocoder';
import { observable, action } from "mobx";

class AddressesStore {
  @observable addresses = [];
  @observable isFetching = false;

  @action.bound
  fetchAddressList = async (addressValue) => {
    console.log('fetch addresses list triggered');
    this.isFetching = true;

    try {
      const { data } = await fetchAddressList(addressValue);
      this.addresses = [...data];
      this.isFetching = false;
    } catch(e) {
      console.error(e);
      this.isFetching = false; 
    }
  }
}

const addresesStore = new AddressesStore();

export default addresesStore;
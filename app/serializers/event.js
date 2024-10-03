import RESTSerializer from '@ember-data/serializer/rest';

export default class EventSerializer extends RESTSerializer {
  primaryKey = 'ssId';

  attrs = {
    name: 'ssName',
    imageUrl: 'imageUrl',
    category: 'category',
    location: 'location',
  };

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log('normalizeResponse');
    //console.log(payload.data);
    if (payload && !Array.isArray(payload.data['activities'])) {
      const event = {
        ssId: payload.data.ssId,
        name: payload.data.ssName,
        imageUrl: payload.data.ssResourceList[0].imageUrl[0],
        category: payload.data.ssResourceList[0].ssResourceName,
      };
      payload = { event };
    }

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log('normalizeArrayResponse');
    //console.log(payload.data['activities']);
    //console.log('requestType: ' + payload);
    payload = { events: payload.data['activities'] };
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}

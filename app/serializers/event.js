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
    if (payload && !Array.isArray(payload['activities'])) {
      const event = {
        ssId: payload.ssId,
        name: payload.ssName,
        imageUrl: payload.ssResourceList[0].imageUrl[0],
        category: payload.ssResourceList[0].ssResourceName,
      };
      //console.log(event);
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
    //console.log(payload['activities']);
    payload = { events: payload['activities'] };
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}

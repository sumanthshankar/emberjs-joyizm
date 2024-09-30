import RESTSerializer from '@ember-data/serializer/rest';

export default class EventSerializer extends RESTSerializer {
  primaryKey = 'ssId';

  attrs = {
    name: 'ssName',
    imageUrl: 'imageUrl',
    category: 'category',
    location: 'location',
  };

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log(payload['activities']);
    payload = { events: payload['activities'] };
    return super.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
  }
}

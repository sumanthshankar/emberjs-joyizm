import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class UserSerializer extends JSONAPISerializer {
    serialize(snapshot, options) {
        let json = super.serialize(snapshot, options);
        return {
            userEmail: snapshot.attr('email'),
            password: snapshot.attr('password'),
            profileType: snapshot.attr('profileType'),
            audience: snapshot.attr('audience')
        };
    }

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const response = JSON.stringify(payload)
        console.log('payload: ' + response);
        return super.normalizeResponse(store, primaryModelClass, normalizedPayload, id, requestType);
    }
}

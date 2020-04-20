CREATE OR  REPLACE FUNCTION card.fnc_register_event( a_ip varchar, a_event varchar, a_cardNumber varchar )
    RETURNS TEXT AS
$BODY$
DECLARE
    -- f_number   jsonb;
BEGIN
    -- f_number = a_data::json->'cardNumber';
    -- RETURN jsonb_build_object('error','Problem happen');
    INSERT INTO card.card ( cardNumber, event, ip ) VALUES ( a_cardNumber, a_event, a_ip );
    RETURN jsonb_build_object('message','Event registered');
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;
COMMENT ON FUNCTION card.fnc_register_event( varchar, varchar, varchar ) IS 'Register Card Event';

-- SELECT card.fnc_event('192.168.0.1', '{"cardNumber":"1000"}');

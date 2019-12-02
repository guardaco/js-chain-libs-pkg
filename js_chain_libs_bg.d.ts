/* tslint:disable */
export const memory: WebAssembly.Memory;
export function __wbg_bip32privatekey_free(a: number): void;
export function bip32privatekey_derive(a: number, b: number): number;
export function bip32privatekey_generate_ed25519_bip32(): number;
export function bip32privatekey_to_raw_key(a: number): number;
export function bip32privatekey_to_public(a: number): number;
export function bip32privatekey_from_bytes(a: number, b: number): number;
export function bip32privatekey_as_bytes(a: number, b: number): void;
export function bip32privatekey_from_bech32(a: number, b: number): number;
export function bip32privatekey_to_bech32(a: number, b: number): void;
export function bip32privatekey_from_bip39_entropy(a: number, b: number, c: number, d: number): number;
export function __wbg_bip32publickey_free(a: number): void;
export function bip32publickey_derive(a: number, b: number): number;
export function bip32publickey_to_raw_key(a: number): number;
export function bip32publickey_from_bytes(a: number, b: number): number;
export function bip32publickey_as_bytes(a: number, b: number): void;
export function bip32publickey_from_bech32(a: number, b: number): number;
export function bip32publickey_to_bech32(a: number, b: number): void;
export function __wbg_legacydaedalusprivatekey_free(a: number): void;
export function legacydaedalusprivatekey_from_bytes(a: number, b: number): number;
export function legacydaedalusprivatekey_as_bytes(a: number, b: number): void;
export function __wbg_ed25519signature_free(a: number): void;
export function ed25519signature_as_bytes(a: number, b: number): void;
export function ed25519signature_to_bech32(a: number, b: number): void;
export function ed25519signature_to_hex(a: number, b: number): void;
export function ed25519signature_from_bytes(a: number, b: number): number;
export function ed25519signature_from_bech32(a: number, b: number): number;
export function ed25519signature_from_hex(a: number, b: number): number;
export function __wbg_accountwitness_free(a: number): void;
export function accountwitness_as_bytes(a: number, b: number): void;
export function accountwitness_to_bech32(a: number, b: number): void;
export function accountwitness_to_hex(a: number, b: number): void;
export function accountwitness_from_bytes(a: number, b: number): number;
export function accountwitness_from_bech32(a: number, b: number): number;
export function accountwitness_from_hex(a: number, b: number): number;
export function __wbg_utxowitness_free(a: number): void;
export function utxowitness_as_bytes(a: number, b: number): void;
export function utxowitness_to_bech32(a: number, b: number): void;
export function utxowitness_to_hex(a: number, b: number): void;
export function utxowitness_from_bytes(a: number, b: number): number;
export function utxowitness_from_bech32(a: number, b: number): number;
export function utxowitness_from_hex(a: number, b: number): number;
export function __wbg_legacyutxowitness_free(a: number): void;
export function legacyutxowitness_as_bytes(a: number, b: number): void;
export function legacyutxowitness_to_bech32(a: number, b: number): void;
export function legacyutxowitness_to_hex(a: number, b: number): void;
export function legacyutxowitness_from_bytes(a: number, b: number): number;
export function legacyutxowitness_from_bech32(a: number, b: number): number;
export function legacyutxowitness_from_hex(a: number, b: number): number;
export function __wbg_privatekey_free(a: number): void;
export function privatekey_from_bech32(a: number, b: number): number;
export function privatekey_to_public(a: number): number;
export function privatekey_generate_ed25519(): number;
export function privatekey_generate_ed25519extended(): number;
export function privatekey_to_bech32(a: number, b: number): void;
export function privatekey_as_bytes(a: number, b: number): void;
export function privatekey_from_extended_bytes(a: number, b: number): number;
export function privatekey_from_normal_bytes(a: number, b: number): number;
export function privatekey_sign(a: number, b: number, c: number): number;
export function __wbg_publickey_free(a: number): void;
export function publickey_from_bech32(a: number, b: number): number;
export function publickey_to_bech32(a: number, b: number): void;
export function publickey_as_bytes(a: number, b: number): void;
export function publickey_from_bytes(a: number, b: number): number;
export function publickey_verify(a: number, b: number, c: number, d: number): number;
export function __wbg_publickeys_free(a: number): void;
export function publickeys_new(): number;
export function publickeys_size(a: number): number;
export function publickeys_get(a: number, b: number): number;
export function publickeys_add(a: number, b: number): void;
export function __wbg_singleaddress_free(a: number): void;
export function singleaddress_get_spending_key(a: number): number;
export function singleaddress_to_base_address(a: number): number;
export function __wbg_groupaddress_free(a: number): void;
export function groupaddress_get_spending_key(a: number): number;
export function groupaddress_get_account_key(a: number): number;
export function groupaddress_to_base_address(a: number): number;
export function __wbg_accountaddress_free(a: number): void;
export function accountaddress_get_account_key(a: number): number;
export function accountaddress_to_base_address(a: number): number;
export function __wbg_multisigaddress_free(a: number): void;
export function multisigaddress_get_merkle_root(a: number, b: number): void;
export function multisigaddress_to_base_address(a: number): number;
export function __wbg_address_free(a: number): void;
export function address_from_bytes(a: number): number;
export function address_as_bytes(a: number, b: number): void;
export function address_from_string(a: number, b: number): number;
export function address_to_string(a: number, b: number, c: number, d: number): void;
export function address_single_from_public_key(a: number, b: number): number;
export function address_delegation_from_public_key(a: number, b: number, c: number): number;
export function address_account_from_public_key(a: number, b: number): number;
export function address_multisig_from_merkle_root(a: number, b: number, c: number): number;
export function address_get_discrimination(a: number): number;
export function address_get_kind(a: number): number;
export function address_to_single_address(a: number): number;
export function address_to_group_address(a: number): number;
export function address_to_account_address(a: number): number;
export function address_to_multisig_address(a: number): number;
export function __wbg_outputs_free(a: number): void;
export function outputs_new(): number;
export function outputs_size(a: number): number;
export function outputs_get(a: number, b: number): number;
export function outputs_add(a: number, b: number): void;
export function __wbg_inputs_free(a: number): void;
export function inputs_new(): number;
export function inputs_size(a: number): number;
export function inputs_get(a: number, b: number): number;
export function inputs_add(a: number, b: number): void;
export function __wbg_fragments_free(a: number): void;
export function fragments_new(): number;
export function fragments_size(a: number): number;
export function fragments_get(a: number, b: number): number;
export function fragments_add(a: number, b: number): void;
export function __wbg_outputpolicy_free(a: number): void;
export function outputpolicy_forget(): number;
export function outputpolicy_one(a: number): number;
export function __wbg_transactionsigndatahash_free(a: number): void;
export function transactionsigndatahash_from_bytes(a: number, b: number): number;
export function transactionsigndatahash_from_hex(a: number, b: number): number;
export function transactionsigndatahash_as_bytes(a: number, b: number): void;
export function __wbg_hash_free(a: number): void;
export function hash_calculate(a: number, b: number): number;
export function hash_from_hex(a: number, b: number): number;
export function hash_as_bytes(a: number, b: number): void;
export function __wbg_input_free(a: number): void;
export function input_from_utxo(a: number): number;
export function input_from_account(a: number, b: number): number;
export function input_get_type(a: number): number;
export function input_is_account(a: number): number;
export function input_is_utxo(a: number): number;
export function input_value(a: number): number;
export function input_get_utxo_pointer(a: number): number;
export function input_get_account_identifier(a: number): number;
export function input_as_bytes(a: number, b: number): void;
export function input_from_bytes(a: number): number;
export function __wbg_utxopointer_free(a: number): void;
export function utxopointer_new(a: number, b: number, c: number): number;
export function utxopointer_output_index(a: number): number;
export function utxopointer_fragment_id(a: number): number;
export function __wbg_account_free(a: number): void;
export function account_from_address(a: number): number;
export function account_to_address(a: number, b: number): number;
export function account_single_from_public_key(a: number): number;
export function account_to_identifier(a: number): number;
export function __wbg_accountidentifier_free(a: number): void;
export function accountidentifier_to_hex(a: number, b: number): void;
export function accountidentifier_to_account_single(a: number): number;
export function accountidentifier_to_account_multi(a: number): number;
export function __wbg_output_free(a: number): void;
export function output_address(a: number): number;
export function output_value(a: number): number;
export function __wbg_value_free(a: number): void;
export function value_from_str(a: number, b: number): number;
export function value_to_str(a: number, b: number): void;
export function value_checked_add(a: number, b: number): number;
export function value_checked_sub(a: number, b: number): number;
export function __wbg_u128_free(a: number): void;
export function u128_from_be_bytes(a: number): number;
export function u128_from_le_bytes(a: number): number;
export function u128_from_str(a: number, b: number): number;
export function u128_to_str(a: number, b: number): void;
export function __wbg_genesispraosleaderhash_free(a: number): void;
export function genesispraosleaderhash_from_hex(a: number, b: number): number;
export function genesispraosleaderhash_to_string(a: number, b: number): void;
export function __wbg_genesispraosleader_free(a: number): void;
export function genesispraosleader_new(a: number, b: number): number;
export function __wbg_certificate_free(a: number): void;
export function __wbg_poolregistration_free(a: number): void;
export function __wbg_stakedelegation_free(a: number): void;
export function __wbg_delegationtype_free(a: number): void;
export function delegationtype_non_delegated(): number;
export function delegationtype_full(a: number): number;
export function delegationtype_ratio(a: number): number;
export function delegationtype_get_kind(a: number): number;
export function delegationtype_get_full(a: number): number;
export function __wbg_delegationratio_free(a: number): void;
export function __wbg_pooldelegationratio_free(a: number): void;
export function pooldelegationratio_new(a: number, b: number): number;
export function __wbg_pooldelegationratios_free(a: number): void;
export function pooldelegationratios_new(): number;
export function pooldelegationratios_size(a: number): number;
export function pooldelegationratios_get(a: number, b: number): number;
export function pooldelegationratios_add(a: number, b: number): void;
export function delegationratio_new(a: number, b: number): number;
export function stakedelegation_new(a: number, b: number): number;
export function stakedelegation_delegation_type(a: number): number;
export function stakedelegation_account(a: number): number;
export function stakedelegation_as_bytes(a: number, b: number): void;
export function stakedelegation_from_bytes(a: number, b: number): number;
export function __wbg_ownerstakedelegation_free(a: number): void;
export function ownerstakedelegation_new(a: number): number;
export function ownerstakedelegation_delegation_type(a: number): number;
export function ownerstakedelegation_as_bytes(a: number, b: number): void;
export function ownerstakedelegation_from_bytes(a: number, b: number): number;
export function __wbg_poolretirement_free(a: number): void;
export function poolretirement_new(a: number, b: number): number;
export function poolretirement_pool_id(a: number): number;
export function poolretirement_retirement_time(a: number): number;
export function poolretirement_as_bytes(a: number, b: number): void;
export function poolretirement_from_bytes(a: number, b: number): number;
export function __wbg_poolupdate_free(a: number): void;
export function poolupdate_new(a: number, b: number, c: number, d: number): number;
export function poolupdate_pool_id(a: number): number;
export function poolupdate_start_validity(a: number): number;
export function poolupdate_previous_keys(a: number): number;
export function poolupdate_updated_keys(a: number): number;
export function poolupdate_as_bytes(a: number, b: number): void;
export function poolupdate_from_bytes(a: number, b: number): number;
export function certificate_stake_delegation(a: number): number;
export function certificate_owner_stake_delegation(a: number): number;
export function certificate_stake_pool_registration(a: number): number;
export function certificate_stake_pool_retirement(a: number): number;
export function certificate_stake_pool_update(a: number): number;
export function certificate_get_type(a: number): number;
export function certificate_get_stake_delegation(a: number): number;
export function certificate_get_owner_stake_delegation(a: number): number;
export function certificate_get_pool_registration(a: number): number;
export function certificate_get_pool_retirement(a: number): number;
export function certificate_get_pool_update(a: number): number;
export function certificate_as_bytes(a: number, b: number): void;
export function poolregistration_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function poolregistration_id(a: number): number;
export function poolregistration_start_validity(a: number): number;
export function poolregistration_owners(a: number): number;
export function poolregistration_operators(a: number): number;
export function poolregistration_rewards(a: number): number;
export function poolregistration_reward_account(a: number): number;
export function poolregistration_keys(a: number): number;
export function poolregistration_as_bytes(a: number, b: number): void;
export function poolregistration_from_bytes(a: number, b: number): number;
export function __wbg_taxtype_free(a: number): void;
export function __wbg_timeoffsetseconds_free(a: number): void;
export function timeoffsetseconds_from_string(a: number, b: number): number;
export function timeoffsetseconds_to_string(a: number, b: number): void;
export function __wbg_poolid_free(a: number): void;
export function poolid_from_hex(a: number, b: number): number;
export function poolid_to_string(a: number, b: number): void;
export function __wbg_kespublickey_free(a: number): void;
export function kespublickey_from_bech32(a: number, b: number): number;
export function __wbg_vrfpublickey_free(a: number): void;
export function vrfpublickey_from_bech32(a: number, b: number): number;
export function __wbg_balance_free(a: number): void;
export function balance_get_sign(a: number): number;
export function balance_is_positive(a: number): number;
export function balance_is_negative(a: number): number;
export function balance_is_zero(a: number): number;
export function balance_get_value(a: number): number;
export function __wbg_fee_free(a: number): void;
export function fee_linear_fee(a: number, b: number, c: number): number;
export function fee_calculate(a: number, b: number): number;
export function __wbg_witness_free(a: number): void;
export function witness_for_utxo(a: number, b: number, c: number): number;
export function witness_from_external_utxo(a: number): number;
export function witness_for_account(a: number, b: number, c: number, d: number): number;
export function witness_from_external_account(a: number): number;
export function witness_for_legacy_icarus_utxo(a: number, b: number, c: number): number;
export function witness_from_external_legacy_icarus_utxo(a: number, b: number): number;
export function witness_for_legacy_daedalus_utxo(a: number, b: number, c: number): number;
export function witness_to_bech32(a: number, b: number): void;
export function __wbg_witnesses_free(a: number): void;
export function witnesses_new(): number;
export function witnesses_size(a: number): number;
export function witnesses_get(a: number, b: number): number;
export function witnesses_add(a: number, b: number): void;
export function __wbg_spendingcounter_free(a: number): void;
export function spendingcounter_zero(): number;
export function spendingcounter_from_u32(a: number): number;
export function __wbg_oldutxodeclaration_free(a: number): void;
export function oldutxodeclaration_size(a: number): number;
export function oldutxodeclaration_get_address(a: number, b: number, c: number): void;
export function oldutxodeclaration_get_value(a: number, b: number): number;
export function __wbg_fragment_free(a: number): void;
export function fragment_from_transaction(a: number): number;
export function fragment_get_transaction(a: number): number;
export function fragment_get_old_utxo_declaration(a: number): number;
export function fragment_as_bytes(a: number, b: number): void;
export function fragment_from_bytes(a: number): number;
export function fragment_is_initial(a: number): number;
export function fragment_is_transaction(a: number): number;
export function fragment_is_owner_stake_delegation(a: number): number;
export function fragment_is_stake_delegation(a: number): number;
export function fragment_is_pool_registration(a: number): number;
export function fragment_is_pool_retirement(a: number): number;
export function fragment_is_pool_update(a: number): number;
export function fragment_is_old_utxo_declaration(a: number): number;
export function fragment_is_update_proposal(a: number): number;
export function fragment_is_update_vote(a: number): number;
export function fragment_id(a: number): number;
export function __wbg_block_free(a: number): void;
export function block_from_bytes(a: number): number;
export function block_id(a: number): number;
export function block_parent_id(a: number): number;
export function block_fragments(a: number): number;
export function block_epoch(a: number): number;
export function block_slot(a: number): number;
export function block_chain_length(a: number): number;
export function block_leader_id(a: number): number;
export function block_content_size(a: number): number;
export function __wbg_blockid_free(a: number): void;
export function blockid_calculate(a: number, b: number): number;
export function blockid_from_bytes(a: number): number;
export function blockid_as_bytes(a: number, b: number): void;
export function __wbg_fragmentid_free(a: number): void;
export function fragmentid_calculate(a: number, b: number): number;
export function fragmentid_from_bytes(a: number): number;
export function fragmentid_as_bytes(a: number, b: number): void;
export function uint8array_to_hex(a: number, b: number): void;
export function __wbg_payload_free(a: number): void;
export function payload_no_payload(): number;
export function payload_certificate(a: number): number;
export function __wbg_inputoutputbuilder_free(a: number): void;
export function inputoutputbuilder_empty(): number;
export function inputoutputbuilder_add_input(a: number, b: number): void;
export function inputoutputbuilder_add_output(a: number, b: number, c: number): void;
export function inputoutputbuilder_estimate_fee(a: number, b: number, c: number): number;
export function inputoutputbuilder_get_balance(a: number, b: number, c: number): number;
export function inputoutputbuilder_get_balance_without_fee(a: number): number;
export function inputoutputbuilder_build(a: number): number;
export function inputoutputbuilder_seal(a: number, b: number, c: number): number;
export function inputoutputbuilder_seal_with_output_policy(a: number, b: number, c: number, d: number): number;
export function __wbg_inputoutput_free(a: number): void;
export function inputoutput_inputs(a: number): number;
export function inputoutput_outputs(a: number): number;
export function __wbg_transaction_free(a: number): void;
export function transaction_id(a: number): number;
export function transaction_inputs(a: number): number;
export function transaction_outputs(a: number): number;
export function transaction_certificate(a: number): number;
export function transaction_witnesses(a: number): number;
export function __wbg_transactionbuilder_free(a: number): void;
export function __wbg_transactionbuildersetios_free(a: number): void;
export function __wbg_transactionbuildersetwitness_free(a: number): void;
export function __wbg_transactionbuildersetauthdata_free(a: number): void;
export function transactionbuilder_new(): number;
export function transactionbuilder_payload(a: number, b: number): number;
export function transactionbuilder_no_payload(a: number): number;
export function transactionbuildersetios_set_ios(a: number, b: number, c: number): number;
export function transactionbuildersetwitness_get_auth_data_for_witness(a: number): number;
export function transactionbuildersetwitness_set_witnesses(a: number, b: number): number;
export function transactionbuildersetauthdata_get_auth_data(a: number): number;
export function transactionbuildersetauthdata_set_payload_auth(a: number, b: number): number;
export function __wbg_transactionbindingauthdata_free(a: number): void;
export function __wbg_payloadauthdata_free(a: number): void;
export function payloadauthdata_for_no_payload(): number;
export function payloadauthdata_for_owner_stake_delegation(): number;
export function payloadauthdata_for_stake_delegation(a: number): number;
export function payloadauthdata_for_pool_registration(a: number): number;
export function payloadauthdata_for_pool_retirement(a: number): number;
export function payloadauthdata_for_pool_update(a: number): number;
export function __wbg_stakedelegationauthdata_free(a: number): void;
export function stakedelegationauthdata_new(a: number): number;
export function __wbg_indexedsignature_free(a: number): void;
export function __wbg_indexsignatures_free(a: number): void;
export function indexsignatures_new(): number;
export function indexsignatures_size(a: number): number;
export function indexsignatures_get(a: number, b: number): number;
export function indexsignatures_add(a: number, b: number): void;
export function indexedsignature_new(a: number, b: number): number;
export function __wbg_accountbindingsignature_free(a: number): void;
export function accountbindingsignature_new_single(a: number, b: number): number;
export function __wbg_poolregistrationauthdata_free(a: number): void;
export function poolregistrationauthdata_new(a: number): number;
export function __wbg_poolretirementauthdata_free(a: number): void;
export function poolretirementauthdata_new(a: number): number;
export function __wbg_poolupdateauthdata_free(a: number): void;
export function poolupdateauthdata_new(a: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;

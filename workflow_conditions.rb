class TBService::WorkflowConditions::InitialVisitEligible
  def initialize (patient, ref_date)
    @patient = patient
    @program = program('TB Program')
    @date = ref_date
  end

  def call
    not_transferred_in? && not_initiated?
  end

  private

  def not_transferred_in?
    Patient.joins(encounters: :observations)\
           .where(encounter: { encounter_type: encounter_type('TB_Initial'),
                               program_id: @program,
                               encounter_datetime: @date,
                               patient_id: @patient, },
                  obs: { concept_id: concept('Type of patient'),
                         value_coded: concept('Referral') })\
           .blank?
  end

  def not_initiated?
    Encounter.where(encounter_type: encounter_type('TB_Initial'),
                    program_id: @program,
                    patient_id: @patient)\
             .blank?
  end
end

# example usage
patient = Patient.create(name: 'XXX')
ref_date = '2020-01-01'.to_date
TBService::WorkflowConditions::InitialVisitEligible.new(patient, ref_date).call
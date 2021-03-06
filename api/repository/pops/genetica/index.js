module.exports = {
  "name": "Perícias de DNA",
  "version": "2.0",
  "area": "pericia_genetica",
  "class": "Laudo de exame de Veiculo Genética",
  "subclass": "",
  "details": "Formulário voltado para a pericia de Genética",
  "form": {
    "title": "2106/2020-AppInc/XX/PF/RJ",
    "description": "Descrição",
    "info": "",
    "fields": [
      {
        "key": "description",
        "type": "description",
        "label": "Descrição do material",
        "placeholder": "",
        "description": "",
        "default_value": "Saliva de pirulito",
        "additonal_type": null,
        "options": [
          {
            "id": 1,
            "description": "Sim"
          },
          {
            "id": 0,
            "description": "Não"
          }
        ]
      },
      {
        "key": "referencia_lacre",
        "type": "seal",
        "label": "Lacre",
        "placeholder": "",
        "description": "Escanear código",
        "default_value": "",
        "additional_type": null
      },
      {
        "key": "remove_seal",
        "type": "radio",
        "label": "O lacre foi removido:",
        "placeholder": "",
        "description": "",
        "default_value": "",
        "additional_type": null,
        "options": [
          {
            "id": 0,
            "description": "Sim"
          },
          {
            "id": 1,
            "description": "Não"
          }
        ]
      },
      {
        "key": "foto_material",
        "type": "camera",
        "label": "Foto do Material",
        "placeholder": "",
        "description": "",
        "default_value": "",
        "additional_type": "note"
      },
      {
        "key": "qualificacao",
        "type": "picker",
        "label": "Qualificação do tipo da amostra",
        "description": "Selecionar alguma opção",
        "placeholder": "exemplo",
        "default_value": "",
        "aditional_type": null,
        "options": [
          "Epit.M.O",
          "Epit.Toque",
          "Epit.Veste",
          "Sangue",
          "Pêlo",
          "Fezes",
          "Vômito",
          "Esperma",
          "Tec. biolog. hum.",
          "Tec. biolog. não - hum.",
          "Osso humano (< 5 anos)",
          "Osso humano (5 a 10 anos)",
          "Osso humano (> 10 anos)",
          "Outros"
        ]
      },
      {
        "key": "mat_type",
        "type": "radio",
        "label": "Esse material é:",
        "placeholder": "",
        "description": "",
        "default_value": "",
        "additional_type": null,
        "options": [
          {
            "id": 0,
            "description": "Material Questionado"
          },
          {
            "id": 1,
            "description": "Material de Referência"
          }
        ]
      },
      {
        "key": "amostra_type",
        "type": "radio",
        "label": "Essa amostra é:",
        "placeholder": "",
        "description": "",
        "default_value": "",
        "additional_type": null,
        "options": [
          {
            "id": 0,
            "description": "Amostra de Fração"
          },
          {
            "id": 1,
            "description": "Amostra na Íntegra"
          }
        ]
      },
      {
        "key": "group1",
        "type": "group",
        "label": "Amostra",
        "description": "Frações da amostra",
        "dependency": "amostra_type",
        "value_dependency": 0,
        "placeholder": "exemplo",
        "group": [
          {
            "key": "description",
            "type": "text",
            "label": "Nº da amostra",
            "placeholder": "",
            "description": "",
            "default_value": null,
            "additional_type": null
          },
          {
            "key": "foto_fracao",
            "type": "camera",
            "label": "Foto da Amostra",
            "placeholder": "",
            "description": "",
            "default_value": "",
            "additional_type": "note"
          },
          {
            "key": "foto_tubo",
            "type": "camera",
            "label": "Foto do Tubo",
            "placeholder": "",
            "description": "",
            "default_value": "",
            "additional_type": null
          }
        ],
        "aditional_type": null,
        "aditional_info": null
      },
      {
        "key": "foto_tubo",
        "type": "camera",
        "label": "Foto do Tubo",
        "dependency": "amostra_type",
        "value_dependency": 1,
        "placeholder": "",
        "description": "",
        "default_value": "",
        "additional_type": null
      },
      {
        "key": "question",
        "type": "radio",
        "label": "Essa material:",
        "placeholder": "",
        "description": "",
        "default_value": "",
        "additional_type": null,
        "options": [
          {
            "id": 0,
            "description": "Foi consumido completamente"
          },
          {
            "id": 1,
            "description": "Haverá devolução"
          }
        ]
      }
    ]
  }
}

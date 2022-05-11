Feature: Lista de Clientes
    Scenario: List of CLients   
    Given I have {10} clientes in my database
    When the Breaker makes a guess
    Then see the list od {10} itens